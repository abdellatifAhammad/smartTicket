<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Tickets extends Model
{
    use HasFactory;

    protected $fillable = [
        "type",
        "date",
        "user_id"
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
