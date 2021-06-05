<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLetterBoxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('letter_boxes', function (Blueprint $table) {
            $table->id();
            $table->text('subject')->nullable();
            $table->longtext('message')->nullable();
            $table->string('image')->nullable();
            $table->string('image2')->nullable();
            $table->string('image3')->nullable();
            $table->string('videolink')->nullable();
            $table->string('name')->nullable();
            $table->string('mobile')->nullable();
            $table->string('email')->nullable();
            $table->string('address')->nullable();
            $table->integer('status')->default(1); /*1 pending 2 proccessing 3 daft 4 publish 0 deleted */
            $table->integer('is_approved')->nullable(); 
            $table->integer('is_daft')->nullable();  
            $table->integer('is_proccessing')->nullable(); 
            $table->integer('is_publish')->nullable(); 
            $table->integer('is_deleted')->nullable(); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('letter_boxes');
    }
}
