<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Posts;
use Illuminate\Support\Facades\Validator;

class PostsController extends Controller
{
    public function index(){
        $posts = Posts::all();
        return $posts;
    }

    public function postsByTopics($commentId) {
        // Filtrar los comentatios por el ID del tema.
        $posts = Posts::with('topic')->where('topic_id', $commentId)->get();
        return $posts;
    }

    public function store(Request $request){

        $validator = Validator::make($request->all(),[
            'postContent'=> 'required|string',
            'topic_id'=> 'required|exists:topics,id'
        ]);

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
        }


        $posts = Posts::create([
            "postContent"=>$request->postContent,
            "topic_id"=>$request->topic_id
        ]);
        $posts->save();
        return $request;
    }

    public function show(Request $request){
        $posts = Posts::find($request->id);
        return $posts;
    }

    public function edit($id){
        $posts = Posts::findOrFail($id);
        return $posts;
    }

    public function update(Request $request, $id){
        $posts = Posts::findOrFail($id);

        $validator = Validator::make($request->all(),[
            'postContent'=> 'required|string',
            'topic_id'=> 'required|exists:topics,id'
        ]);

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
        }

        $posts->postContent = $request->input('postContent');
        $posts->topic_id=$request->topic_id;

        $posts->save();
        return $posts;
    }

    public function destroy(Request $request){
        $posts = Posts::where("id", "=", $request->id)->delete();
        return $posts;
    }

    public function token(){
        return csrf_token();
    }
}
