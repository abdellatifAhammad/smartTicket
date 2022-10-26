<?php

use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\UserController;
use \App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::any("/loginWeb",[AuthController::class,"loginWeb"]);

Route::get("/login",function (){
    return view('Login');
});

Route::get("/",function (){
    return view('Login');
});

Route::post("/logout",[AuthController::class,"logoutWeb"]);


Route::post("/addBalanceWeb",[UserController::class,"addBalanceWeb"]);


