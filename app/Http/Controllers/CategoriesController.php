<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 
use App\Models\Categories;

class CategoriesController extends Controller
{
    public function index(){
        $categories = Categories::all();
        return $categories;
    }

    public function store(Request $request){
        $categories = Categories::create([
            "name"=>$request->name, 
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
        $categories->name = $request->input('name');
        $categories->genre_id=$request->genre_id;
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
