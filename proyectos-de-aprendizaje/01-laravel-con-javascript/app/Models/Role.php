<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Role extends Model
{
    protected $fillable = ['name'];

    // Un rol puede pertenecer a muchos usuarios
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
