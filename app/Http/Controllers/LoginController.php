<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function userdashboard(Request $request){
        $pagetype="guideline";
        $userdata=$request->session()->get('userdetails'); 
        return Inertia::render('user_dashboard', ['data' => $userdata]); 
    }
}
