<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVillagesTable extends Migration
{
    
    public function up(){
        Schema::create('t_village_master', function (Blueprint $table) {
            $table->increments('village_id');
            $table->string('village_name');
            $table->string('village_status');
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('t_village_master');
    }
}
