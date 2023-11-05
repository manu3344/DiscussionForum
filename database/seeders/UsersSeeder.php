<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = new User(); 
        $users->name = "Manuel Alvarado"; 
        $users->email = "manualvaradoibarr@gmail.com";  
        $users->email_verified_at = now(); 
        $users->password = "12345678";
        $users->remember_token = Str::random(10);
        $users->save(); 
    }
}
