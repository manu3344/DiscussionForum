<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Genres extends Model
{
    use HasFactory;
    protected $fillable = ["name", "genre_id"];
    
    
    public function categories()
    {
        return $this->belongsToMany(Categories::class);
    }
}
