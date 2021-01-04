<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Village extends Model
{
    use HasFactory;
    protected $table = 't_village_master';
    public $timestamps = false; 
    protected $fillable = ['village_id', 'village_name', 'village_status'];
}
