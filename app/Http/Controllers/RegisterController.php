<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use Validator; 

use Illuminate\Http\JsonResponse; 
use Illuminate\Support\Facades\Auth;

class RegisterController extends ResponseController
{
    public function register(Request $request): JsonResponse {
        $validator = Validator::make($request->all(),[
            'name'=> 'required', 
            'email'=> 'required|email', 
            'password' => 'required', 
            'c_password' => 'required|same:password'
        ]);

        if($validator->fails()){
            return $this->sendError("Validation Error.", $validator->errors());
        }

        $input = $request->all(); 
        $input['password'] = bcrypt($input['password']); 
        $user = User::create($input); 
        $success['token'] = $user->createToken("MyApp")->accessToken; 
        $success['name'] = $user->name; 

        return $this->sendResponse($success, 'User Register Succesfully'); 
    }

    public function login(Request $request):JsonResponse{
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::user(); 
            $success['token'] = $user->createToken('MyApp')->accessToken; 
            $success['name'] = $user->name; 

            return $this->sendResponse($success, "User login succesfully"); 
        
        }else{
            return $this->sendError('Unauthorized', ['error'=>'Unauthorized']);
        }
    }
}
