<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

use Illuminate\Queue\Middleware\RateLimited;
use App\Mail\RememberEmail;
Use Mail;
Use App\Http\Controllers\UserController;

Use App\Models\User;

class RememberToBuyTicket implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
      
//        $tickets = $user->tickets()->get();    
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
        $users = User::get()->all();
        
        foreach($users as $user)
        {
            $email = new RememberEmail($user);                
            Mail::to($user->email)->send($email);
        }

        
    }

    public function middleware()
    {
        return [new RateLimited('RememberToBuyTicket')];
    }
}
