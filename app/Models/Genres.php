<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Genres extends Model {
    use HasFactory;
    protected $fillable = ["name", "image_path", "genre_id", "user_id"];

    public function categories(): HasMany{
        return $this->hasMany(Categories::class, "genre_id");
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
