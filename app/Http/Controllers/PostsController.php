<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Posts;
use Illuminate\Support\Facades\Validator;

class PostsController extends ResponseController {
    public function index() {
        $posts = Posts::all();
        return $posts;
    }

    public function postsByTopics($commentId) {
        $posts = Posts::with('topic')->where('topic_id', $commentId)->get();
        return $posts;
    }

    public function store(Request $request) {
        $user = $request->user();

        $validator = Validator::make($request->all(),[
            'postContent'=> 'required|string',
            'topic_id'=> 'required|exists:topics,id'
        ]);

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
        }

        $posts = Posts::create([
            "postContent"=>$request->postContent,
            "topic_id"=>$request->topic_id,
            "user_id" => $user->id
        ]);

        $posts->save();

        return response()->json($posts);
    }

    public function show(Request $request) {
        $posts = Posts::find($request->id);
        return $posts;
    }

    public function edit($id) {
        $posts = Posts::findOrFail($id);
        return $posts;
    }

    public function update(Request $request, $id) {
        $user = $request->user();
        $posts = Posts::findOrFail($id);

        if ($posts->user_id != $user->id) {
            return response()->json('You are not authorized to update this post.', 401);
        }

        $validator = Validator::make($request->all(),[
            'postContent'=> 'required|string',
            'topic_id'=> 'required|exists:topics,id'
        ]);

        if ($validator->fails()) {
            return $this->sendError("Validation Error.", $validator->errors());
        }

        $posts->postContent = $request->input('postContent');
        $posts->topic_id=$request->topic_id;

        $posts->save();

        return $posts;
    }

    public function destroy(Request $request) {
        $user = $request->user();
        $posts = Posts::where("id", "=", $request->id)->first();

        if ($posts->user_id != $user->id) {
            return response()->json('You are not authorized to delete this post.', 401);
        }

        $posts->delete();

        return $posts;
    }

    public function token() {
        return csrf_token();
    }
}
