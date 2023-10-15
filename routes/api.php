<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TopicsController;
use App\Http\Controllers\PostsController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('register',[RegisterController::class, 'register']);
Route::post('login',[RegisterController::class, 'login']);
Route::get('/categories_index', [CategoriesController::class, 'index']);
Route::get('/topic_index', [TopicsController::class, 'index']);
Route::get('/post_index', [PostsController::class, 'index']);



//Estas son rutas no permitidas. 
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

