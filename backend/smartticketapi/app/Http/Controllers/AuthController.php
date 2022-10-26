<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Spatie\Permission\Models\Permission;




class AuthController extends Controller
{
    //

    public function register(Request $request)
    {
                           
            $validator = \Validator::make($request->input(),['lastname' => 'required|string',
            'firstname' => 'required|string',
            'email' => "required|string|unique:users,email|regex:'.*@insea.ac.ma'",
            'password' => 'required|string|confirmed'
            ]);

            
            if($validator->fails())
            {             
             return response()->json($validator->messages(), 400);
            }

            $user = User::create([
                'nom' =>  $request->lastname,
                "prenom" =>  $request->firstname,
                'email' => $request->email,
                'password' => bcrypt($request->password)
            ]);

            $token = $user->createToken("thisIsAToken")->plainTextToken;

            $response = [
                "user" => $user,
                "token" => $token
            ];

            return response()->json($response, 201);
    }

    public function ControllerRegister(Request $request)
    {
           
        $validator = \Validator::make($request->input(),['lastname' => 'required|string',
        'firstname' => 'required|string',
        'email' => "required|string|unique:users,email|regex:'.*@insea.ac.ma'",
        'password' => 'required|string|confirmed'
        ]);

        
        if($validator->fails())
        {             
         return response()->json($validator->messages(), 400);
        }
            
         
        $user = User::create([
            'nom' =>  $request->lastname,
            "prenom" =>  $request->firstname,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'type'=>1
        ]);

            $token = $user->createToken("thisIsAToken")->plainTextToken;
            $permission = Permission::create(['guard_name' => 'web', 'name' => 'Check Tickets']);
            $user->givePermissionTo($permission);

            $response = [
                "user" => $user,
                "token" => $token
            ];

            return response()->json($response, 201);
    }

    public function GuichitierRegister(Request $request)
    {
           
        $validator = \Validator::make($request->input(),['lastname' => 'required|string',
        'firstname' => 'required|string',
        'email' => "required|string|unique:users,email|regex:'.*@insea.ac.ma'",
        'password' => 'required|string|confirmed'
        ]);

        
        if($validator->fails())
        {             
         return response()->json($validator->messages(), 400);
        }
            
         
        $user = User::create([
            'nom' =>  $request->lastname,
            "prenom" =>  $request->firstname,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'type'=>2
        ]);

            $token = $user->createToken("thisIsAToken")->plainTextToken;            

            $response = [
                "user" => $user,
                "token" => $token
            ];

            return response()->json($response, 201);
    }

    public function login(Request $request)
    {
        

        $validator = \Validator::make($request->input(),[  
            'email' => 'required|string',
            'password' => 'required|string|confirmed'
            ]);

        
        if($validator->fails())
        {             
         return response()->json($validator->messages(), 400);
        }
    

        # check email and password
        $user = User::where('email',$request->email)->first();
       
        if(!$user || !Hash::check($request->password, $user->password))
        {
            return response()->json([
                "message" => "Bad credentials"
            ],400);
        }
        else
        {
        $token =  $user->createToken("thisIsAToken")->plainTextToken;

        $response = [
            "user" => $user,
            "token" => $token
        ];

        return response()->json($response, 201);
        }

        
    }

   
    public function notLoggedIn(Request $request)
    {
            //
            return response()->json(["message" => "Not logged in"], 400);
    }
        
    

    public function logout(Request $request)
    {
            //
            auth()->user()->tokens()->delete();
            return ["message" => "logged out"];
    }

// web


public function loginWeb(Request $request)
{


    $validator = \Validator::make($request->input(),[  
        'email' => 'required|string',
        'password' => 'required|string|confirmed'
        ]);

    
    if($validator->fails())
    {             
     return response()->json($validator->messages(), 400);
    }


    # check email and password
    $user = User::where('email','=',$request->email)
                ->where('type',"=",2)
                ->first();
    
    if(!$user || !Hash::check($request->password, $user->password))
    {
        return response()->json([
            "message" => "Bad credentials"
        ],400);
    }
    else
    {
    $token =  $user->createToken("thisIsAToken")->plainTextToken;

    $response = [
        "user" => $user,
        "token" => $token
    ];

    //return response()->json($response, 201);
    
    $users = User::get()->all();
    $request->session()->put('data',["guichitier"=>$user,"users"=>$users]);
    return view('home');    
}

    
}

public function logoutWeb(Request $request)
{
        //
        $request->session()->flush();
        return redirect("/");
}


}
