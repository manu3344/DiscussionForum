<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->unsignedBigInteger("topic_id"); 
            $table->unsignedBigInteger("user_id"); 
            $table->foreign("topic_id")->references("id")->on("topics")->onDelete("cascade");
            $table->foreign("user_id")->references("id")->on("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropForeign('posts_topic_id_foreign'); 
            $table->dropColumn('topic_id'); 
            $table->dropForeign('posts_user_id_foreign'); 
            $table->dropColumn('user_id'); 
        });
    }
};
