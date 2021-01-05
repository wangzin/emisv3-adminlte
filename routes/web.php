<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/userloginindex', function () {
    return view('loginpage');
});
Route::get('userlogin',[LoginController::class,'userdashboard'])->name('userlogin');
Route::get('/verify', [LoginController::class,'verify'])->name('verify');
Route::get('/change_basic_info', [LoginController::class,'change_basic_info'])->name('change_basic_info');
Route::get('/getorgDetails', [LoginController::class,'getorgDetails'])->name('getorgDetails');


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');
