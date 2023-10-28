<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 
use App\Models\Topics;
use Validator; 

class TopicsController extends Controller
{
    public function index(){
        $topics = Topics::all();
        return $topics;
        //        return $topics->posts;
    }

    public function store(Request $request){

        $validator = Validator::make($request->all(),[
            'title'=> 'required|string|max:100', 
            'description'=>'required|string',
            'image_path'=>'required|file',
            'categories_id'=> 'required|exists:categories,id'
        ]);

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
        }

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
        }

        if($request->hasFile('image_path')){
            $file = $request->file("image_path"); 
            $destinationPath = "images/"; 
            $filename = time() .'-' .$file->getClientOriginalName();
            $uploadSuccess = $request ->file('image_path')->move($destinationPath,$filename);
        }

        $topics = Topics::create([
            "title"=>$request->title,
            "description"=>$request->description, 
            "image_path" =>$destinationPath . $filename,
            "categories_id"=>$request->categories_id
        ]);
        $topics->save(); 
        return $request;
    }

    public function show(Request $request){
        $topics = Topics::find($request->id); 
        return $topics;
    }

    public function edit($id){
        $topics = Topics::findOrFail($id);
        return $topics;
    }

    public function update(Request $request, $id){
        $topics = Topics::findOrFail($id); 
        $topics->title = $request->input('title');
        $topics->description = $request->input('description');
        $topics->save(); 
        return $topics;
    }

    public function destroy(Request $request){
        $topics = Topics::where("id", "=", $request->id)->delete(); 
        return $topics;
    }

    public function token(){
        return csrf_token(); 
    }
}
