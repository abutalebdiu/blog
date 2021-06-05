<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateManPowersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('man_powers', function (Blueprint $table) {
            $table->id();
            $table->string('man_power_uid')->unique();
            $table->string('name');
            $table->string('email');
            $table->string('contact');
            $table->text('address');
            $table->text('notes');
            $table->string('images');
            $table->integer('division_id');
            $table->integer('district_id');
            $table->integer('thana_id');
            $table->integer('type')->default(1); /*1 reporter 2 source*/
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
        Schema::dropIfExists('man_powers');
    }
}
