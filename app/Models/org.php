<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class org extends Model
{
    use HasFactory;
    protected $table = 't_org_details';
    public $timestamps = false; 
    protected $fillable = ['org_id', 'org_name', 'org_status', 'org_location_village', 'org_type', 'org_category','org_level'];
}
