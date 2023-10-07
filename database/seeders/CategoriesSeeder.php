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
        $categories->name = "Anime"; 
        $categories->genre_id=1; 
        $categories->save(); 
    }
}
