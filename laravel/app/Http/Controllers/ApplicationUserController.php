<?php

namespace App\Http\Controllers;

use App\Models\ApplicationUser;
use Illuminate\Http\Request;
use Vyuldashev\LaravelOpenApi\Annotations as OpenApi;

/**
 * @OpenApi\PathItem()
 */
class ApplicationUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @OpenApi\Operation(tags="user")
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ApplicationUser::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OpenApi\Operation(tags="user")
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = ApplicationUser::create($request->all());
        return response()->json($user, 201);
    }

    /**
     * Display the specified resource.
     *
     * @OpenApi\Operation(tags="user")
     * @param  \App\Models\ApplicationUser  $applicationUser
     * @return \Illuminate\Http\Response
     */
    public function show(ApplicationUser $applicationUser)
    {
        return $applicationUser;
    }

    /**
     * Update the specified resource in storage.
     *
     * @OpenApi\Operation(tags="user")
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ApplicationUser  $applicationUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ApplicationUser $applicationUser)
    {
        $applicationUser->update($request->all());
        return response()->json($applicationUser, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @OpenApi\Operation(tags="user")
     * @param  \App\Models\ApplicationUser  $applicationUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(ApplicationUser $applicationUser)
    {
        $applicationUser->delete();
        return response()->json(null, 204);
    }
}
