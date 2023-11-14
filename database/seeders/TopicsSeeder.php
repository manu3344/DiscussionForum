<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Topics;

class TopicsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $topics = new Topics();
        $topics->title = "Hunter x Hunter";
        $topics->description = "Foro de discusion de Hunter x Hunter";
        $topics->image_path = "images/hunter.jpg";
        $topics->categories_id=1;
        $topics->user_id = 1;
        $topics->save();
    }
}
