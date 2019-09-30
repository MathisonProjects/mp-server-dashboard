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
    	if ($request->input('id')) {
    		$site = SiteManagement::find($request->input('id'));
    	} else {
    		$site = new SiteManagement;
    	}

    	$site->name        = $request->input('name');
		$site->description = $request->input('description');
		$site->data        = json_encode($request->input('data'));
		$site->save();
    }
}
