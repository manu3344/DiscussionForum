<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Genres;

class GenresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $genres = new Genres();
        $genres->name = "Comedia";
        $genres->image_path = "images/com.png";
        $genres->user_id = 1;
        $genres->save();
    }
}
