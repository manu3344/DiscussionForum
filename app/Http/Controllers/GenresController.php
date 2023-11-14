<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Genres;
use Illuminate\Support\Facades\Validator;

class GenresController extends Controller
{
    public function index(){
        $genres = Genres::all();
        return $genres;
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=> 'required|string|max:100',
            'image_path'=>'required|file|mimes:jpeg,png,gif'
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

        $genres = Genres::create([
            "name"=>$request->name,
            "image_path" =>$destinationPath . $filename

        ]);
        $genres->save();
        return $request;
    }

    public function show(Request $request){
        $genres =  Genres::find($request->id);
        return $genres;
    }

    public function edit($id){
        $genres =  Genres::findOrFail($id);
        return $genres;
    }

    public function update(Request $request, $id){
        $genres =  Genres::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'image_path' => 'required|file|mimes:jpeg,png,gif'
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error.", $validator->errors());
        }

        $genres->name = $request->input('name');

        if ($request->hasFile('image_path')) {
            $file = $request->file('image_path');
            $destinationPath = "images/";
            $filename = time() . '-' . $file->getClientOriginalName();
            $uploadSuccess = $file->move($destinationPath, $filename);
            if ($uploadSuccess) {
                // Actualiza la ruta de la imagen en la base de datos
                $genres->image_path = $destinationPath . $filename;
            }
        }

        $genres->save();
        return $genres;
    }

    public function destroy(Request $request){
        $genres = Genres::where("id", "=", $request->id)->delete();
        return $genres;
    }

    public function token(){
        return csrf_token();
    }
}
