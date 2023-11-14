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
        Schema::table('categories', function (Blueprint $table) {
            $table->unsignedBigInteger("genre_id");
            $table->foreign("genre_id")->references("id")->on("genres")->onDelete("cascade");
            $table->unsignedBigInteger("user_id");
            $table->foreign("user_id")->references("id")->on("users");
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {

        Schema::table('categories', function (Blueprint $table) {
            $table->dropForeign('categories_genre_id_foreign');
            $table->dropColumn('genre_id');
            $table->dropForeign('categories_user_id_foreign');
            $table->dropColumn('user_id');
        });
    }
};
