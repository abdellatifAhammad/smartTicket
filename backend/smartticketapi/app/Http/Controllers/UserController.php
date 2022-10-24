<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\HistoryController;
use App\Models\History;

use Mail;
use App\Mail\RememberEmail;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $user = auth("sanctum")->user();

        return response()->json([
            "id"=>$user->id,
            "email"=>$user->email,
            "userName"=>$user->prenom." ".$user->nom,
            "sold"=>$user->sold
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    static public function payTickets($id,$total)
    {
        // TODO substract $total from sold
        $user = User::find($id);

        $user->sold -= $total;        
        
        return $user->save();
    }

    static public function addBalance($id,$total)
    {
        // TODO substract $total from sold
        $user = User::get()->where("id","=",$id)->first();

        $user->sold += $total;

        HistoryController::store($total,"+");

        $user->save();
        return response()->json([
            "message"=>$total." was added to ".$user->prenom." ".$user->nom."'s balance"
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function balanceHistory()
    {
        $user = auth("sanctum")->user();

        $history = $user->history()->get();
        $sold = $user->sold;
        
        return response()->json([
            "sold"=>$sold,
            "history"=>$history
        ], 200);

    }


}
