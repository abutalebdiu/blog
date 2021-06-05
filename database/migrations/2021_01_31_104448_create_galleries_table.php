<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGalleriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('galleries', function (Blueprint $table) {
            $table->id();
            $table->string('uid')->unique();
            $table->text('title');
            $table->text('slug');
            $table->integer('category_id');
            $table->integer('gallery_type');  /*1 is image 2 is videos*/
            $table->string('publish_date');   
            $table->integer('video_type')->nullable();  /*1 is image 2 is videos*/
            $table->string('youtube_code')->nullable();   
            $table->string('image');   
            $table->longtext('details')->nullable();  
            $table->integer('status')->default(1); 
            $table->softDeletes();
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
        Schema::dropIfExists('galleries');
    }
}
