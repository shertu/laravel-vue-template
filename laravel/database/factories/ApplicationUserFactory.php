<?php

namespace Database\Factories;

use App\Models\ApplicationUser;
use Illuminate\Database\Eloquent\Factories\Factory;

class ApplicationUserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ApplicationUser::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id' => uniqid(),
            'name' => $this->faker->name,
            'avatar_url' => $this->faker->imageUrl(),
        ];
    }
}
