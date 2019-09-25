<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\SiteManagement;

class SiteManagementController extends Controller
{
    public function getSites(Request $request) {
    	return SiteManagement::all();
    }
    
    public function saveSite(Request $request) {
    	
    }
}
