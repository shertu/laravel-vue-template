<?php

namespace App\OpenApi\Responses;

use GoldSpecDigital\ObjectOrientedOAS\Objects\Response;
use Vyuldashev\LaravelOpenApi\Factories\ResponseFactory;

class DeleteApplicationUserResponse extends ResponseFactory
{
    public function build(): Response
    {
        return Response::create()
            ->statusCode(204)
            ->description('No Content');
    }
}
