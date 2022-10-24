<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Jobs\RememberToBuyTicket;

class EmailController extends Controller
{
    //
    public function sendEmail()
    {
        $rtbt = new RememberToBuyTicket();
        dispatch($rtbt);
    }
}
