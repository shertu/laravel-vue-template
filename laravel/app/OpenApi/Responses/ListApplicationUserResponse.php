<?php

namespace App\OpenApi\Responses;

use App\OpenApi\Schemas\ApplicationUserSchema;
use GoldSpecDigital\ObjectOrientedOAS\Objects\MediaType;
use GoldSpecDigital\ObjectOrientedOAS\Objects\Response;
use GoldSpecDigital\ObjectOrientedOAS\Objects\Schema;
use Vyuldashev\LaravelOpenApi\Factories\ResponseFactory;

class ListApplicationUserResponse extends ResponseFactory
{
    public function build(): Response
    {
        $response = Schema::array()->items(ApplicationUserSchema::ref());

        return Response::ok()
            ->content(MediaType::json()->schema($response));
    }
}
