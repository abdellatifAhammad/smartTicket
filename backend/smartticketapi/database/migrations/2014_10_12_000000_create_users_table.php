<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('nom');
            $table->string('prenom');
            $table->dateTime('dateNaissance')->nullable();
            $table->string('LieuNaissance')->nullable();
            $table->string('sexe')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('nationalite')->nullable();
            $table->string('adresse')->nullable();
            $table->integer('tel')->nullable();
            $table->string('cycle')->nullable();
            $table->string('classe')->nullable();
            $table->integer('chambre')->nullable();
            $table->integer('num_carte_res')->nullable();
            $table->decimal('sold',5,2)->default(0);
            $table->string('image')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
