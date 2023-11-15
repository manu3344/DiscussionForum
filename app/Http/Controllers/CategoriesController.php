<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Categories;
use Illuminate\Support\Facades\Validator;

class CategoriesController extends ResponseController {
    public function index(){
        $categories = Categories::all();
        return $categories;
    }

    public function categoriesByGenres($genreId){
        // Filtrar las categorías por el ID del género
        $categories = Categories::with('genre')->where('genre_id', $genreId)->get();
        return $categories;
    }

    public function store(Request $request){
        $user = $request->user();

        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:100',
            'image_path'=>'required|file|mimes:jpeg,png,gif',
            'genre_id'=> 'required|exists:genres,id'
        ]);

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
        }

        if ($user->role != 'admin') {
            return response()->json('You are not authorized to create categories.', 401);
        }

        if($request->hasFile('image_path')){
            $file = $request->file("image_path");
            $destinationPath = "images/";
            $filename = time() .'-' .$file->getClientOriginalName();
            $uploadSuccess = $request ->file('image_path')->move($destinationPath,$filename);
        }

        $categories = Categories::create([
            "name"=>$request->name,
            "image_path" =>$destinationPath . $filename,
            "genre_id"=>$request->genre_id,
            "user_id"=>$user->id
        ]);

        $categories->save();

        return response()->json($categories);
    }

    public function show(Request $request){
        $categories = Categories::find($request->id);
        return $categories;
    }

    public function edit($id){
        $categories = Categories::findOrFail($id);
        return $categories;
    }

    public function update(Request $request, $id){
        $user = $request->user();
        $categories = Categories::findOrFail($id);

        if ($categories->user_id != $user->id) {
            return response()->json('You are not authorized to update this category.', 401);
        }

        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:100',
            'image_path'=>'required|file|mimes:jpeg,png,gif',
            'genre_id'=> 'required|exists:genres,id'
        ]);

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
        }

        $categories->name = $request->input('name');
        $categories->genre_id=$request->genre_id;

        if ($request->hasFile('image_path')) {
            $file = $request->file('image_path');
            $destinationPath = "images/";
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $file->move($destinationPath, $filename);

            if ($uploadSuccess) {
                $categories->image_path = $destinationPath . $filename;
            }
        }

        $categories->save();

        return $categories;
    }

    public function destroy(Request $request){
        $user = $request->user();
        $categories = Categories::where("id", "=", $request->id)->first();

        if ($categories->user_id != $user->id) {
            return response()->json('You are not authorized to delete this category.', 401);
        }

        $categories->delete();
        return $categories;
    }

    public function token(){
        return csrf_token();
    }
}
