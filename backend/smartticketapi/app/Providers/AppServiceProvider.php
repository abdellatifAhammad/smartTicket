<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;
 

class AppServiceProvider extends ServiceProvider
{
    
    
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        RateLimiter::for('RememberToBuyTicket', function () {
    
            return Limit::perDay(1000);#->by($job->user->id);
        });    

        \Schema::defaultStringLength(125);
    }
}
