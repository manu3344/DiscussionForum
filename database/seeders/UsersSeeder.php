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
        $users->role="admin";
        $users->remember_token = Str::random(10);
        $users->save();

        $users = new User();
        $users->name = "Cesar Villalobos Olmos";
        $users->email = "cesar-09a@hotmail.com";
        $users->email_verified_at = now();
        $users->password = "12345678";
        $users->role="admin";
        $users->remember_token = Str::random(10);
        $users->save();

        $users = new User();
        $users->name = "Hector Felipe Hernandez Garcia";
        $users->email = "hector@gmail.com";
        $users->email_verified_at = now();
        $users->password = "12345678";
        $users->role="user";
        $users->remember_token = Str::random(10);
        $users->save();

        $users = new User();
        $users->name = "Luis Angel Hernandez Lopez";
        $users->email = "luis@gmail.com";
        $users->email_verified_at = now();
        $users->password = "12345678";
        $users->role="user";
        $users->remember_token = Str::random(10);
        $users->save();

        $users = new User();
        $users->name = "Aranzazu Jimena Messa Sanchez";
        $users->email = "aranza@gmail.com";
        $users->email_verified_at = now();
        $users->password = "12345678";
        $users->role="user";
        $users->remember_token = Str::random(10);
        $users->save();
    }
}
