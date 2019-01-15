<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticle2sTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('article2s', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title')->comment('标题')->unique();
            $table->string('zuozhe')->comment('作者');
            $table->text('content')->comment('文章内容');
            $table->string('fenlei_id')->comment('所属分类');
            $table->string('news_pic')->comment('图片')->nullable();
            $table->bigInteger('dianji')->comment('点击量')->default(rand(100,1000));
            $table->string('create_time')->comment('发布时间');;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('article2s');
    }
}
