<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Org_Category extends Model
{
    use HasFactory;
    protected $table = 't_org_category';
    public $timestamps = false; 
    protected $fillable = ['cagetory_id', 'category_name', 'category_status'];
}
