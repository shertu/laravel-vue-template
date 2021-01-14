<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\DB;
use PDOException;
use Tests\TestCase;

class DatabaseConnectionTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testConnection()
    {
        $this->expectNotToPerformAssertions();

        try {
            DB::connection()->unprepared('SHOW STATUS');
        } catch (PDOException $th) {
            $this->fail(sprintf(
                'The Laravel web application framework failed to connect to the database as specified in the environment with error message: %s.',
                $th->getMessage()
            ));
        }
    }
}
