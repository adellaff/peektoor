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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('content');
            $table->string('image');
            $table->string('slug');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('category_id');
            $table->integer('view');
            $table->integer('like');
            $table->integer('comment');
            $table->string('membership_type')->comment('1 = Reguler, 2 = Premium');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
