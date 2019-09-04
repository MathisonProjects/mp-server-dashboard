<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApiAuth extends Model
{
    protected $table = 'ApiAuth';
    protected $fillable = [ 'uid', 'client_key', 'client_secret', 'token', 'api_key', 'active' ];

    public static function authenticated($token) {
    	$api = self::where('api_key', $token)->first();
    	if ($api && $api->active == 1) {
    		return true;
    	} else {
    		return false;
    	}
    }
}
