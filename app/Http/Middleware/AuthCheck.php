<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\ApiAuth;

class AuthCheck
{
    public function handle($request, Closure $next) {
        // init auth
        $auth = ApiAuth::authenticated($request->bearerToken());

        if ($auth) {
            return $next($request);
        } else {
            return response('Your API is not valid!', 401);
        }
    }
}
