<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrgsTable extends Migration{
    public function up(){
        Schema::create('t_org_details', function (Blueprint $table) {
            $table->increments('org_id');
            $table->string('org_name');
            $table->string('org_status');
            $table->integer('org_location_village');
            $table->integer('org_type');
            $table->integer('org_category');
            $table->integer('org_level');
            $table->timestamps();
        }); 
    }

    public function down(){
        Schema::dropIfExists('t_org_details');
    }
}
