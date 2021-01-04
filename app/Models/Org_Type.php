<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Org_Type extends Model
{
    use HasFactory;
    protected $table = 't_org_type';
    public $timestamps = false; 
    protected $fillable = ['type_id', 'type_name', 'type_status'];
}
