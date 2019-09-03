<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Models\ApiAuth;

class AuthController extends Controller
{
	public function getAuths() {
		$return = [];
		$users = User::get();

		foreach ($users as $key => $user) {
			$auth = ApiAuth::where('uid', $user->id)->first();

			$return[] = [
				'id'           => $user->id,
				'Username'     => $user->email,
				'ClientKey'    => ($auth) ? $auth->client_key    : '',
				'ClientSecret' => ($auth) ? $auth->client_secret : '',
				'ApiKey'       => ($auth) ? $auth->api_key       : '',
				'Suspended'    => ($auth) ? $auth->active        : '',
				'revealed'  => [
					'clientSecret' => false,
					'apiKey'       => false
				]
			];
		}


		return $return;
	}

    public function createUser(Request $request) {

    }

	public function updateUser(Request $request) {

	}

	public function suspendUser(Request $request) {

	}

	public function refreshClient(Request $request) {

	}

	public function refreshSecret(Request $request) {

	}

	public function refreshApiKey(Request $request) {

	}
}
