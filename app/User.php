<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Hash;

use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens,Notifiable;

    protected $fillable = [ 'name', 'email', 'password' ];
    protected $hidden   = [ 'password', 'remember_token' ];
    protected $casts    = [ 'email_verified_at' => 'datetime' ];

    public static function checkUsersExist($user) {
    	$total = self::get();
    	if (count($total) == 0) {
    		self::createUserQuietly($user);
    	}
        
    }

    private static function createUserQuietly($user) {
    	$user['name'] = $user['email'];
    	$user['password'] = Hash::make($user['password']);
	    $user = self::create($user);
    }
}
