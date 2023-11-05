<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Genres; 




/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Genres>
 */
class GenresFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        
        return [
            "name"=>fake()->words(2,true),
            "image_path"=>fake()->imageUrl($width = "80px", $height = "80px", 'Genres')
        ];
    }
}
