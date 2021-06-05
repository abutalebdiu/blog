<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('newsuid');
            $table->text('title');
            $table->text('home_page_title');
            $table->text('sharetitle');
            $table->text('slug')->unique();
            $table->text('shoulder')->nullable();
            $table->text('hanger')->nullable();

            $table->integer('category_id')->nullable();
            $table->integer('main_category_id')->nullable();
            $table->integer('sub_category_id')->nullable();
            $table->integer('news_view')->nullable();
            $table->integer('page_list_id')->nullable();
            $table->integer('top_news')->nullable();
            $table->integer('top_serial')->nullable();
            $table->integer('selected_news')->nullable();
            $table->integer('selected_news_serial')->nullable();
            $table->integer('editor_news')->nullable();
            $table->integer('editor_news_serial')->nullable();


            $table->integer('writter_id')->nullable();
            $table->integer('reproter_id')->nullable();
          
            $table->longText('details');
            $table->longText('summery')->nullable();
            $table->longText('thumbnail')->nullable();




            $table->string('image');
            $table->string('home_image')->nullable();
            $table->string('is_detail_image')->nullable();
            $table->string('image_caption')->nullable();
            $table->string('image_source')->nullable();
            $table->string('image_alt')->nullable();

            $table->integer('division_id')->nullable();
            $table->integer('district_id')->nullable();
            $table->integer('thana_id')->nullable();
 
            $table->text('meta_description')->nullable();
            $table->string('meta_keyword')->nullable();

 
            $table->string('publish_date');
            $table->integer('breaking')->default(0);
            $table->string('breaking_end_date')->nullable();
            $table->string('breaking_end_time')->nullable();
            $table->integer('is_recent')->default(0);
            $table->integer('is_slider')->default(0);
            $table->integer('status')->default(1);
            $table->integer('user_id')->default(1);
            $table->integer('related_post_id')->nullable();
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
        Schema::dropIfExists('news');
    }
}
