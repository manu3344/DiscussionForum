<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;
    protected $fillable = ["name", "categories_id"]; 

    public function topics(): HasMany{
        return $this->hasMany(Topics::class, 'categories_id'); 
    }
}
