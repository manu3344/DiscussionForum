<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Categories extends Model
{
    use HasFactory;
    protected $fillable = ["name", "categories_id"]; 

    public function topics(): HasMany{
        return $this->hasMany(Topics::class, 'categories_id'); 
    }

    public function genres():BelongsToMany{
        return $this->belongsToMany(Genres::class);
    }
}
