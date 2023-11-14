<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Topics extends Model
{
    use HasFactory;
    protected $fillable = ["title", "description", "image_path", "topic_id", "categories_id", "user_id"];

    public function posts(): HasMany {
        return $this->hasMany(Posts::class, 'topic_id');
    }

    public function category(): BelongsTo {
        return $this->belongsTo(Categories::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
