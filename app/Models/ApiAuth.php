<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiAuth extends Model
{
    protected $table = 'ApiAuth';
    protected $fillable = [ 'uid', 'client_key', 'client_secret', 'api_key' ];
}
