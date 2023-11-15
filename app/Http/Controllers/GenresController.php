<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Genres;
use Illuminate\Support\Facades\Validator;

class GenresController extends ResponseController {
    public function index() {
        $genres = Genres::all();
        return $genres;
    }

    public function store(Request $request) {
        $user = $request->user();

        $validator = Validator::make($request->all(), [
            'name'=> 'required|string|max:100',
            'image_path'=>'required|file|mimes:jpeg,png,gif'
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error.", $validator->errors());
        }

        if ($user->role != 'admin') {
            return response()->json('You are not authorized to create categories.', 401);
        }

        if ($request->hasFile('image_path')){
            $file = $request->file("image_path");
            $destinationPath = "images/";
            $filename = time() .'-' .$file->getClientOriginalName();
            $uploadSuccess = $request ->file('image_path')->move($destinationPath,$filename);
        }

        $genres = Genres::create([
            "name"=>$request->name,
            "image_path" =>$destinationPath . $filename,
            "user_id" => $user->id
        ]);

        $genres->save();

        return response()->json($genres);
    }

    public function show(Request $request) {
        $genres =  Genres::find($request->id);
        return $genres;
    }

    public function edit($id) {
        $genres =  Genres::findOrFail($id);
        return $genres;
    }

    public function update(Request $request, $id) {
        $user = $request->user();
        $genres =  Genres::findOrFail($id);

        if ($genres->user_id != $user->id) {
            return response()->json('You are not authorized to update this genre.', 401);
        }

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

    public function destroy(Request $request) {
        $user = $request->user();
        $genres = Genres::where("id", "=", $request->id)->first();

        if ($genres->user_id != $user->id) {
            return response()->json('You are not authorized to delete this genre.', 401);
        }

        $genres->delete();

        return $genres;
    }

    public function token() {
        return csrf_token();
    }
}
