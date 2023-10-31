<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\GenresController;
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

// Mostrar datos
Route::get('/genres_index', [GenresController::class, 'index']);
Route::get('/categories_index', [CategoriesController::class, 'index']);
Route::get('/topic_index', [TopicsController::class, 'index']);
Route::get('/post_index', [PostsController::class, 'index']);

// Insertar datos
Route::post('/genresForm', [GenresController::class, 'store']);
Route::post('/categoriesForm', [CategoriesController::class, 'store']);
Route::post('/topicsForm', [TopicsController::class, 'store']);
Route::post('/postsForm', [PostsController::class, 'store']);

// Borrar datos
Route::delete('/genres_delete/{id}', [GenresController::class, 'destroy']);
Route::delete('/categories_delete/{id}', [CategoriesController::class, 'destroy']);
Route::delete('/topics_delete/{id}', [TopicsController::class, 'destroy']);
Route::delete('/posts_delete/{id}', [PostsController::class, 'destroy']);

//Editar datos. 
Route::post('/genresForm/{id}', [GenresController::class, 'update']);
Route::post('/categoriesForm/{id}', [CategoriesController::class, 'update']);
Route::post('/topicsForm/{id}', [TopicsController::class, 'update']);
Route::post('/postsForm/{id}', [PostsController::class, 'update']);

//Estas son rutas no permitidas. 
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

