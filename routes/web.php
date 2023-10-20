<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\TopicsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\GenresController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::view('/{path}','welcome')->where('path','.*'); 


//Routes for posts
Route::get('/post', [PostsController::class, 'index']);
Route::post('/postStore', [PostsController::class, 'store']);
Route::get('/token', [PostsController::class, 'token']);
Route::get('/postShow', [PostsController::class, 'show']);
Route::post('/postDestroy', [PostsController::class, 'destroy']);
Route::get("/postEdit/{id}", [PostsController::class,'edit']);
Route::post('/postUpdate/{id}',[PostsController::class,'update']); 

//Routes for topics
Route::get('/topic', [TopicsController::class, 'index']);
Route::post('/topicStore', [TopicsController::class, 'store']);
Route::get('/token', [TopicsController::class, 'token']);
Route::get('/topicShow', [TopicsController::class, 'show']);
Route::post('/topicDestroy', [TopicsController::class, 'destroy']);
Route::get("/topicEdit/{id}", [TopicsController::class,'edit']);
Route::post('/topicUpdate/{id}',[TopicsController::class,'update']); 

//Routes for Categories
Route::get('/categories', [CategoriesController::class, 'index']);
Route::post('/categoriesStore', [CategoriesController::class, 'store']);
Route::get('/token', [CategoriesController::class, 'token']);
Route::get('/categoriesShow', [CategoriesController::class, 'show']);
Route::post('/categoriesDestroy', [CategoriesController::class, 'destroy']);
Route::get("/categoriesEdit/{id}", [CategoriesController::class,'edit']);
Route::post('/categoriesUpdate/{id}',[CategoriesController::class,'update']); 

//Routes for Genres
Route::get('/genre', [GenresController::class, 'index']);
Route::post('/genreStore', [GenresController::class, 'store']);
Route::get('/token', [GenresController::class, 'token']);
Route::get('/genreShow', [GenresController::class, 'show']);
Route::post('/genreDestroy', [GenresController::class, 'destroy']);
Route::get("/genreEdit/{id}", [GenresController::class,'edit']);
Route::post('/genreUpdate/{id}',[GenresController::class,'update']); 