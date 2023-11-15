<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Posts;
use App\Models\Topics;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
 */
class PostsFactory extends Factory {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        return [
            "postContent"=>fake()->paragraph($nbSentences = 3),
            "topic_id"=>Topics::all()->random()->id,
            "user_id"=>User::all()->random()->id
        ];
    }
}
