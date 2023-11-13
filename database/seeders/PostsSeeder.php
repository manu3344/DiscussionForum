<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Posts; 

class PostsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = new Posts(); 
        $posts->postContent = "Uno de los mejores animes";  
        $posts->topic_id=1; 
        $posts->user_id=1;
        $posts->save(); 
    }
}
