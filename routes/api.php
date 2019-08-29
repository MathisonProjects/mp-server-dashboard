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
});