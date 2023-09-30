<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Topics extends Model
{
    use HasFactory;
    protected $fillable = ["title", "description", "topic_id", "categories_id"]; 

    public function posts(): HasMany{
        return $this->hasMany(Posts::class, 'topic_id'); 
    }
    public function categories(): BelongsTo{
        return $this->belongsTo(Categories::class);
    }
}
