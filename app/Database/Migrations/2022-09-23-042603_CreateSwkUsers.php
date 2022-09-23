<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;
use CodeIgniter\Database\RawSql;

class CreateSwkUsers extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id' => [
                'type'              => 'BIGINT',
                'unsigned'          => true,
                'auto_increment'    => true
            ],
            'name' => [
                'type'              => 'VARCHAR',
                'constraint'        => 255,
                'null'              => true
            ],
            'email' => [
                'type'              => 'VARCHAR',
                'constraint'        => 255,
                'unique'            => true
            ],
            'username' => [
                'type'              => 'VARCHAR',
                'constraint'        => 255,
                'unique'            => true
            ],
            'phone' => [
                'type'              => 'VARCHAR',
                'constraint'        => 63,
                'null'              => true
            ],
            'password' => [
                'type'              => 'VARCHAR',
                'constraint'        => 255
            ],
            'created_at' => [
                'type'              => 'TIMESTAMP',
                'default'           => new RawSql('CURRENT_TIMESTAMP'),
                'null'              => true
            ],
            'updated_at' => [
                'type'              => 'TIMESTAMP',
                'default'           => new RawSql('CURRENT_TIMESTAMP'),
                'null'              => true
            ],
            'deleted_at' => [
                'type'              => 'TIMESTAMP',
                'null'              => true
            ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable("swk_users");
    }

    public function down()
    {
        $this->forge->dropTable("swk_users");
    }
}
