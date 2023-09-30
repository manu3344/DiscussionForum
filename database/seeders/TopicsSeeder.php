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
        $topics->title = "Jujutsu Kaisen"; 
        $topics->description = "Foro de discusion de Jujutsu Kaisen";  
        $topics->categories_id=1; 
        $topics->save(); 
    }
}
