<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Genres;
use App\Models\Categories;
use App\Models\Topics;
use App\Models\Posts;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(GenresSeeder::class);
        $this->call(CategoriesSeeder::class);
        $this->call(TopicsSeeder::class);
        $this->call(PostsSeeder::class);
        $this->call(UsersSeeder::class);
        Genres::factory(5)->create();
        Categories::factory(5)->create();
        Topics::factory(5)->create();
        Posts::factory(5)->create();
        User::factory(5)->create(); 


    }
}
