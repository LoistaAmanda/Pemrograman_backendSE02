<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'student'; 
    protected $fillable = ['id','name','nim','email', 'majority', 'created_at', 'update_at'];
}
