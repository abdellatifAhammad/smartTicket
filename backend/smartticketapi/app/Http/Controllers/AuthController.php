<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Facades\Hash;





class AuthController extends Controller
{
    //

    public function register(Request $request)
    {
           
           $feilds = $request->validate([
                'lastname' => 'required|string',
                'firstname' => 'required|string',
                'email' => "required|string|unique:users,email|regex:'.*@insea.ac.ma'",
                'password' => 'required|string|confirmed'
            ]);
            
            
            $user = User::create([
                'nom' =>  $feilds['lastname'],
                "prenom" =>  $feilds['firstname'],
                'email' => $feilds['email'],
                'password' => bcrypt($feilds['password'])
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
        $feilds = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string|confirmed'
        ]);

        # check email and password
        $user = User::where('email',$feilds['email'])->first();
       
        if(!$user || !Hash::check($feilds['password'], $user->password))
        {
            return response()->json([
                "message" => "Bad credentials"
            ]);
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


    public function logout(Request $request)
    {
            //
            auth()->user()->tokens()->delete();
            return ["message" => "logged out"];
    }
}
