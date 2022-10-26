<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Use App\Http\Controllers\AuthController;
Use App\Http\Controllers\TicketsController;
Use App\Http\Controllers\UserController;
Use App\Http\Controllers\HistoryController;
Use App\Http\Controllers\EmailController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



// protected routes

Route::middleware('auth:sanctum')->get("/tickets", [TicketsController::class, "index"]);
Route::middleware('auth:sanctum')->post('/tickets/new', [TicketsController::class, "store"]);
Route::middleware('auth:sanctum')->get('/tickets/getTicket/{id}',[TicketsController::class, "show"]);
Route::middleware('auth:sanctum')->delete('/tickets/cancel/{id}',[TicketsController::class, "destroy"]);
Route::middleware('auth:sanctum')->post("/check",[TicketsController::class,"check"]);


Route::middleware('auth:sanctum')->get('/user',[UserController::class, "show"]);
Route::middleware('auth:sanctum')->get('/user/balanceHist',[UserController::class, "balanceHistory"]);

Route::middleware('auth:sanctum')->get("/remember",[EmailController::class,"sendEmail"]);

// open routes



Route::post('/register', [AuthController::class, "register"]);
Route::post('/controller/register', [AuthController::class, "ControllerRegister"]);
Route::post('/guichitier/register', [AuthController::class, "GuichitierRegister"]);
Route::post('/login', [AuthController::class, "login"]);
Route::get('/NotLoggedIn', [AuthController::class, "notLoggedIn"])->name("NotLoggedIn");
Route::post('/forgotpassword',function(){
    return response()->json(["res"=>"forgotPassword"], 200);
} );