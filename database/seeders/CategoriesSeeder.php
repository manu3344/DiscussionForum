<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categories; 

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = new Categories(); 
        $categories->name = "Peliculas"; 
        $categories->image_path = "images/movies.png";
        $categories->genre_id=1; 
        $categories->save(); 
    }
}
