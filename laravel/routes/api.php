<?php

use App\Models\ApplicationUser;
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

// routes inside api.php will be prefixed with /api/
Route::get('ApplicationUsers', 42069);
//Route::get('ApplicationUsers', 'ApplicationUserController@index');
Route::get('ApplicationUsers/{id}', 'ApplicationUserController@show');
Route::post('ApplicationUsers', 'ApplicationUserController@store');
Route::put('ApplicationUsers/{id}', 'ApplicationUserController@update');
Route::delete('ApplicationUsers/{id}', 'ApplicationUserController@delete');
