<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTicketsRequest;
use App\Http\Requests\UpdateTicketsRequest;
use App\Models\Tickets;
use \Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;
use Illuminate\Database\Eloquent\Collection;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HistoryController;

class TicketsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = auth('sanctum')->user();
        $data = [
            "Tickets"=>Tickets::where("user_id",'=',$user->id)->paginate()
        ];
        return response()->json($data, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTicketsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = auth('sanctum')->user();
        /*dd($user);*/

        #dd($request->input()[0]);
        $total = 0;
        foreach($request->input() as $input)
        {
            $validator = \Validator::make($input,[
                "type"=>["required",Rule::in(["Breakfast","Launch","Dinner"])],
                "date"=>"required|after:".today().""
            ]);
            
            if($validator->fails())
            {             
             return response()->json($validator->messages(), 400);
            }

            $validated = $validator->validated();
            
            $cs =Tickets::get()
                    ->where("user_id",'=',$user->id)->where("type",'=',$validated['type'])
                    ->where("date",'=',new Carbon($validated["date"]))
                    ->count();
#            dd($cs);
            if($cs>0)        
            {
                $data = [
                    "message"=>"".$validated['type']." for the date ".$validated['date']." already bought"
                ];
                return response()->json($data, 400);
            }
            // calculate total price
            if($input['type']=="Breakfast")
            {
                $total+=1;
            }
            elseif($input['type']=="Launch"){
                $total+=1.40;
            }elseif($input['type']=="Dinner"){
                $total+=1.40;
            }
        }
        
            #UserController::addBalance($user->id,20);
            #$user = auth('sanctum')->user();

            if($user->sold < $total)
            {
                $data= [
                    "message"=>"Total price is greater than user's balance",
                    "total price"=>$total,
                    "balance(sold)"=>auth('sanctum')->user()->sold
                ];
                return response()->json($data, 400);
            }
            
            foreach($request->input() as $input)
            {
                $user->tickets()->create(
                    [
                        "type"=>$input['type'],
                        "date"=>$input['date']
                    ]
                    );
            }

            UserController::payTickets($user->id,$total);
            
            HistoryController::store($total,"Buy(-)");

            $data = 
                [
                    "message"=>"Tickets are Bought",
                    "Tickets"=>$request->input(),
                    "Price"=>$total,
                    "New Balance"=>auth('sanctum')->user()->sold
                ];
            
            return response()->json($data,201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)    
    {        
        $data = [
            "ticket"=>Tickets::get()->where("ticket_id",'=',$id)->first()
        ];
        return response()->json($data, 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTicketsRequest  $request
     * @param  \App\Models\Tickets  $tickets
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateTicketsRequest $request,$id)
    {
        // pas besoin de cette méthode
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Tickets  $tickets
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $user = auth('sanctum')->user();

        $ticket = Tickets::get()->where("ticket_id",'=',$id)->first();        
        if($ticket->type=="Breakfast")
        {            
            UserController::addBalance($user->id,1);
        }
        elseif($ticket->type=="Launch" || $ticket->type=="Dinner")
        {
            UserController::addBalance($user->id,1.40);
        }
        
        

        if(Tickets::where("ticket_id",'=',$id)->delete())
        {   
            $data = [
                "message"=>"".$ticket->type."'s Ticket for date : ".$ticket->date." was canceled"
            ];
            return response()->json($data, 200);
        }
        else{
            $data = [
                "message"=>"Ticket wasn't canceled"
            ];
            return response()->json($data, 400);
        }        
    }


    public function check(Request $request)
    {
        

        $user = auth("sanctum")->user();
        
        if($user->hasPermissionTo('Check Tickets', 'web'))
        {
            $validator = \Validator::make($request->input(),[
                "user_id"=>"required",
                "ticket_id"=>"required",
                "date"=>"required"
            ]);
            
            if($validator->fails())
            {             
             return response()->json($validator->messages(), 400);
            }
            
    
            $t = Tickets::get()
            ->where("ticket_id",'=',$request->ticket_id)
            ->where("user_id",'=',$request->user_id)
            ->where("date",'=',new Carbon($request->date))
            ->first();
    
            if(!empty($t))
            {
                return response()->json([
                    "message"=>"ok"
                ], 200);
            }else
            {
                return response()->json(
                    [
                        "message"=>"not found"
                    ]
                    , 404);
            }
        }else
        {
            return response()->json([
                "message"=>"rejected"
            ],400);
        }
        
    }
}
