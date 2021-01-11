<?php

namespace Database\Seeders;

use App\Models\ApplicationUser;
use Illuminate\Database\Seeder;

class ApplicationUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ApplicationUser::factory(10)
            ->create();
    }
}
