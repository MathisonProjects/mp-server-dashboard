<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NodeServers extends Model
{
    protected $table = 'NodeServers';
    protected $fillable = [
    	'name'     ,
		'directory'
    ];
}
