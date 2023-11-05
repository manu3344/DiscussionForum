<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 
use App\Models\Categories;
use Validator; 

class CategoriesController extends Controller
{
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

        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:100', 
            'image_path'=>'required|file',
            'genre_id'=> 'required|exists:genres,id'
        ]);

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
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
            "genre_id"=>$request->genre_id
        ]);
        $categories->save(); 
        return $request;
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
        $categories = Categories::findOrFail($id); 

        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:100', 
            'image_path'=>'required|file',
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
                // Actualiza la ruta de la imagen en la base de datos
                $categories->image_path = $destinationPath . $filename;
            }
        }

        $categories->save(); 
        return $categories;
    }

    public function destroy(Request $request){
        $categories = Categories::where("id", "=", $request->id)->delete(); 
        return $categories;
    }

    public function token(){
        return csrf_token(); 
    }

}
