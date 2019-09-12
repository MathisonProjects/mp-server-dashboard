<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\NodeServers;

class NodeController extends Controller
{
    public function refreshServerList(Request $request) {
    	return NodeServers::get();
    }

	public function addServer(Request $request) {
		$server = new NodeServers;
		$server->name = $request->input('name');
		$server->directory = $request->input('directory');
		$server->save();
	}

	public function updateServer(Request $request) {
		$server = NodeServers::find($request->input('id'));
		$server->name = $request->input('name');
		$server->directory = $request->input('directory');
		$server->save();
	}
}
