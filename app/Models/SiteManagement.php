<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SiteManagement extends Model
{
    protected $table = 'SiteManagement';
    protected $fillable = ['name', 'description', 'data'];
}
