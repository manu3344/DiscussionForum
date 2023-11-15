<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Categories extends Model {
    use HasFactory;
    protected $fillable = ["name", "categories_id", "image_path", "genre_id", "user_id"];

    public function topics(): HasMany {
        return $this->hasMany(Topics::class, 'categories_id');
    }

    public function genre(): BelongsTo {
        return $this->belongsTo(Genres::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
