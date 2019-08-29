<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Models\Todo_Projects;
use App\Models\Todo_Categories;
use App\Models\Todo_Tasks;

class TodoController extends Controller
{
	public function getRefresh() {
		$data = [
			'projects'   => Todo_Projects::get(),
			'categories' => Todo_Categories::get(),
			'tasks'      => Todo_Tasks::get()
		];

		return $data;
	}

    public function createProject(Request $request) {
    	$project              = new Todo_Projects;
    	$project->Name        = $request->input('Name');
    	$project->Description = $request->input('Description');
    	$project->save();
    }
    public function createCategories(Request $request) {
    	$category              = new Todo_Categories;
    	$category->ProjectId   = $request->input('ProjectId');
    	$category->Name        = $request->input('Name');
    	$category->Description = $request->input('Description');
    	$category->save();
    }

    public function createTasks(Request $request) {
    	$task              = new Todo_Tasks;
    	$task->CategoryId  = $request->input('CategoryId');
    	$task->Name        = $request->input('Name');
    	$task->Description = $request->input('Description');
        $task->SubtaskOf   = $request->input('SubtaskOf');
    	$task->Status      = $request->input('Status');
    	$task->save();
    }

    public function editProject(Request $request) {
    	$project              = Todo_Projects::find($request->input('id'));
    	$project->Name        = $request->input('Name');
    	$project->Description = $request->input('Description');
    	$project->save();
    }

    public function editCategories(Request $request) {
    	$category              = Todo_Categories::find($request->input('id'));
    	$category->ProjectId   = $request->input('ProjectId');
    	$category->Name        = $request->input('Name');
    	$category->Description = $request->input('Description');
    	$category->save();
    }

    public function editTasks(Request $request) {
    	$task              = Todo_Tasks::find($request->input('id'));
    	$task->CategoryId  = $request->input('CategoryId');
    	$task->Name        = $request->input('Name');
    	$task->Description = $request->input('Description');
    	$task->SubtaskOf   = $request->input('SubtaskOf');
        $task->Status      = $request->input('Status');
    	$task->save();
    }

    public function deleteProject(Request $request) {
		$modelToDelete = Todo_Projects::find($request->input('id'));
		$modelToDelete->delete();
    }

    public function deleteCategories(Request $request) {
		$modelToDelete = Todo_Categories::find($request->input('id'));
		$modelToDelete->delete();
    }

    public function deleteTasks(Request $request) {
    	$modelToDelete = Todo_Tasks::find($request->input('id'));
		$modelToDelete->delete();
    }
}
