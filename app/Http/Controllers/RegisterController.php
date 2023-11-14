<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class RegisterController extends ResponseController
{
    public function register(Request $request): JsonResponse {
        $validator = Validator::make($request->all(),[
            'name'=> 'required|min:2|max:100',
            'email'=> 'required|email|unique:users,email|max:255',
            'password' => 'required|min:8|max:255',
            'c_password' => 'required|same:password|max:255'
        ]);

        if($validator->fails()){
            return response()->json([
                'error' => $validator->errors()
            ], 422);
       }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] = $user->createToken("MyApp")->accessToken;
        $success['name'] = $user->name;

        return $this->sendResponse($success, 'User Register Succesfully');
    }

    public function login(Request $request):JsonResponse{
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:8|max:255',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => $validator->errors()
            ], 422);
        }

        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            $success['name'] = $user->name;

            return $this->sendResponse($success, "User login succesfully");

        }else{
            return response()->json([
                'error' => 'Unauthorized'
            ], 401); // 401 Unauthorized
        }
    }
}
