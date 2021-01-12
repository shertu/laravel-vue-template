<?php

namespace App\OpenApi\Responses;

use App\OpenApi\Schemas\ApplicationUserSchema;
use GoldSpecDigital\ObjectOrientedOAS\Objects\MediaType;
use GoldSpecDigital\ObjectOrientedOAS\Objects\Response;
use Vyuldashev\LaravelOpenApi\Factories\ResponseFactory;

class InsertApplicationUserResponse extends ResponseFactory
{
    public function build(): Response
    {
        return Response::ok()
            ->content(MediaType::json()->schema(ApplicationUserSchema::ref()));
    }
}
