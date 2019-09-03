<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// v1, todo, 


Route::prefix('v1')->group(function () {
	Route::post('getAuths', 'Api\AuthController@getAuths');

	Route::prefix('todo')->group(function() {
		Route::post('getRefresh'      ,'Api\TodoController@getRefresh');
		Route::post('createProject'   ,'Api\TodoController@createProject');
		Route::post('createCategories','Api\TodoController@createCategories');
		Route::post('createTasks'     ,'Api\TodoController@createTasks');
		Route::post('editProject'     ,'Api\TodoController@editProject');
		Route::post('editCategories'  ,'Api\TodoController@editCategories');
		Route::post('editTasks'       ,'Api\TodoController@editTasks');
		Route::post('deleteProject'   ,'Api\TodoController@deleteProject');
		Route::post('deleteCategories','Api\TodoController@deleteCategories');
		Route::post('deleteTasks'     ,'Api\TodoController@deleteTasks');
	});

	Route::prefix('auth')->group(function() {
		Route::post('createUser' , 'Api\AuthController@createUser');
		Route::post('updateUser' , 'Api\AuthController@updateUser');
		Route::post('suspendUser' , 'Api\AuthController@suspendUser');
		Route::post('refreshClient' , 'Api\AuthController@refreshClient');
		Route::post('refreshSecret' , 'Api\AuthController@refreshSecret');
		Route::post('refreshApiKey' , 'Api\AuthController@refreshApiKey');
	});
});




Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group(['middleware' => ['json.response']], function () {
    Route::middleware('auth:api')->get('/user', function (Request $request) {
        return $request->user();
    });
    // public routes
    Route::post('/login', 'Api\UserController@login')->name('login.api');
    Route::post('/register', 'Api\UserController@register')->name('register.api');
    // private routes
    Route::middleware('auth:api')->group(function () {
        Route::get('/logout', 'Api\UserController@logout')->name('logout');
    });
});