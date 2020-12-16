<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Session;

class LoginController extends Controller
{
    public function userdashboard(Request $request){
        $pagetype="guideline";
        $username=$request->input('username');  
        if($username!=null){
            Session::put('userID', $username); 
        }       
        $userdata=$username; 
        return Inertia::render('user_dashboard', ['data' => $userdata]); 
    }
    public function verify(){
        return response()->json(['role' => Session::get('userID'), 'user' => Session::get('userID')] ,200);
    }
}
