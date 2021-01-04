<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrgCategoriesTable extends Migration
{
    
    public function up()
    {
        Schema::create('t_org_category', function (Blueprint $table) {
            $table->increments('cagetory_id');
            $table->string('category_name');
            $table->string('category_status');
            $table->timestamps();
        });
    }

    public function down(){
        Schema::dropIfExists('t_org_category');
    }
}
