<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 
use App\Models\Genres;

class GenresController extends Controller
{
    public function index(){
        $genres = Genres::all();
        return $genres;
    }

    public function store(Request $request){
        $genres = Genres::create([
            "name"=>$request->name
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
        $genres->name = $request->input('name');
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
