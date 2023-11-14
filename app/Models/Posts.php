<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Posts extends Model
{
    use HasFactory;
    protected $fillable = ["postContent", "topic_id", "user_id"];

    public function topic(): BelongsTo {
        return $this->belongsTo(Topics::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
