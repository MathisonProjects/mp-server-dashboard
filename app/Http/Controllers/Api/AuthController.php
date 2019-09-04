<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Sujip\Guid\Guid;

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
		$auth = ApiAuth::where('uid', $request->input('uid'))->first();
		if (!$auth) {
			$auth = new ApiAuth;
			$auth->uid = $request->input('uid');
		}
		$auth->client_key = $this->getGuid();
		$auth->save();
	}

	public function refreshSecret(Request $request) {
		$auth = ApiAuth::where('uid', $request->input('uid'))->first();
		if (!$auth) {
			$auth = new ApiAuth;
			$auth->uid = $request->input('uid');
		}
		$auth->client_secret = $this->getGuid();
		$auth->save();
	}

	public function refreshApiKey(Request $request) {
		$auth = ApiAuth::where('uid', $request->input('uid'))->first();
		if (!$auth) {
			$auth = new ApiAuth;
			$auth->uid = $request->input('uid');
		}
		$auth->api_key = $this->getGuid();
		$auth->save();
	}

	private function getGuid() {
		$guid = new Guid;
		return $guid->create();
	}
}
