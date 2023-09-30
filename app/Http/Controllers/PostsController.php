<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 
use App\Models\Posts;

class PostsController extends Controller
{
    public function index(){
        $posts = Posts::all();
        foreach ($posts as $post) {
            $topic = $post->topic;
            // Hacer algo con $topic si es necesario
        }
        return $posts;
    }

    public function store(Request $request){
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
        $posts->postContent = $request->input('postContent');
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
