<?php

use App\Http\Controllers\ApplicationUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// routes inside api.php will be prefixed with /api/
Route::get('ApplicationUsers', [ApplicationUserController::class, 'index']);
//Route::get('ApplicationUsers/{id}', [ApplicationUserController::class, 'show']);
Route::post('ApplicationUsers', [ApplicationUserController::class, 'store']);
Route::put('ApplicationUsers/{id}', [ApplicationUserController::class, 'update']);
Route::delete('ApplicationUsers/{id}', [ApplicationUserController::class, 'destroy']);
