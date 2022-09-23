<?php

namespace App\Database\Seeds;

use App\Entities\User;
use App\Models\UserModel;
use CodeIgniter\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $user_object = new User();
        $user_model = new UserModel();

        $user_object->fill(
            [
                "name" => 'Purbayan Chowdhury',
                "email" => 'shivishbrahma@swork.iaa',
                "username" => 'shivishbrahma',
                "phone" => '987654321',
                "password" => '123456'
            ]
        );

        $user_model->save($user_object);
    }
}
