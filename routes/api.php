<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\GenresController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TopicsController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\UserController;

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

// Generos de las categorias.
Route::get('/categoriesByGenres/{genreId}', [CategoriesController::class, 'categoriesByGenres']);
Route::get('/topicsByCategories/{categoryId}', [TopicsController::class, 'topicsByCategories']);
Route::get('/postsByTopics/{commentId}', [PostsController::class, 'postsByTopics']);

// Insertar datos
Route::post('/genresForm', [GenresController::class, 'store'])->middleware('auth:api');
Route::post('/categoriesForm', [CategoriesController::class, 'store'])->middleware('auth:api');
Route::post('/topicsForm', [TopicsController::class, 'store'])->middleware('auth:api');
Route::post('/postsForm', [PostsController::class, 'store'])->middleware('auth:api');

// Borrar datos
Route::delete('/genres_delete/{id}', [GenresController::class, 'destroy'])->middleware('auth:api');
Route::delete('/categories_delete/{id}', [CategoriesController::class, 'destroy'])->middleware('auth:api');
Route::delete('/topics_delete/{id}', [TopicsController::class, 'destroy'])->middleware('auth:api');
Route::delete('/posts_delete/{id}', [PostsController::class, 'destroy'])->middleware('auth:api');

//Editar datos.
Route::post('/genresForm/{id}', [GenresController::class, 'update'])->middleware('auth:api');
Route::post('/categoriesForm/{id}', [CategoriesController::class, 'update'])->middleware('auth:api');
Route::post('/topicsForm/{id}', [TopicsController::class, 'update'])->middleware('auth:api');
Route::post('/postsForm/{id}', [PostsController::class, 'update'])->middleware('auth:api');

// TEST
Route::get('/test', [UserController::class, 'test'])->middleware('auth:api');

Route::get('/get-token', [RegisterController::class, 'getToken'])->middleware('auth:api');

//Estas son rutas no permitidas.
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
