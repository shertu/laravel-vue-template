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
     * @OpenApi\Operation(tags="ApplicationUser")
     * @OpenApi\Response(factory="ListApplicationUserResponse")
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ApplicationUser::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @OpenApi\Operation(tags="ApplicationUser")
     * @OpenApi\Response(factory="InsertApplicationUserResponse")
     *
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user = ApplicationUser::create($request->all());

        return response()->json($user, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @OpenApi\Operation(tags="ApplicationUser")
     * @OpenApi\Response(factory="UpdateApplicationUserResponse")
     *
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
     * @OpenApi\Operation(tags="ApplicationUser")
     * @OpenApi\Response(factory="DeleteApplicationUserResponse")
     *
     * @return \Illuminate\Http\Response
     */
    public function destroy(ApplicationUser $applicationUser)
    {
        $applicationUser->delete();

        return response()->json(null, 204);
    }
}
