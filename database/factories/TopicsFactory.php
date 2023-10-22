<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Topics; 
use App\Models\Categories; 

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Topics>
 */
class TopicsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title"=>fake()->sentence(),
            "description"=>fake()->paragraph($nbSentences = 1), 
            "categories_id"=>Categories::all()->random()->id
        ];
    }
}
