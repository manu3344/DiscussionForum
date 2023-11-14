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

        $this->call(UsersSeeder::class);
        $this->call(GenresSeeder::class);
        $this->call(CategoriesSeeder::class);
        $this->call(TopicsSeeder::class);
        $this->call(PostsSeeder::class);
        // User::factory(4)->create(); 
        Genres::factory(4)->create();
        Categories::factory(4)->create();
        Topics::factory(4)->create();
        Posts::factory(20)->create();



    }
}
