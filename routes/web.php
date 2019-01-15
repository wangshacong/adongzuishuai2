<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });


//后台页面
//登录页面
Route::get('admin/login', 'Admin\AdminController@login');
//登录验证
Route::post('/admin/dologin', 'Admin\AdminController@dologin');
//退出登录
Route::get('admin/logout', 'Admin\AdminController@logout');
// Route::group(['middleware' => 'login'], function () {
//首页
    Route::get('/admin', 'Admin\AdminController@index');
    //用户列表
    Route::get('/admin/user', 'Admin\AdminController@userindex');
    //用户添加页面
    Route::get('/admin/user/create', 'Admin\AdminController@usercreate');
    //用户添加
    Route::post('admin/user/shore', 'Admin\AdminController@usershore');
    //用户修改页面
    Route::get('admin/user/{id}/update', 'Admin\AdminController@userupdate');
    //用户提交修改
    Route::post('admin/user/{id}/edit', 'Admin\AdminController@useredit');
    //用户删除
    Route::get('admin/user/{id}/destroy', 'Admin\AdminController@userdestroy');
    //分类列表
    Route::get('/admin/sort','Admin\AdminController@sortindex');
    //分类添加页面
    Route::get('/admin/sort/create', 'Admin\AdminController@sortcreate');
    //分类添加
    Route::get('/admin/sort/shore', 'Admin\AdminController@sortshore');
    //分类修改页
    Route::get('/admin/sort/{id}/edit', 'Admin\AdminController@sortedit');
    //分类修改
    Route::get('/admin/sort/{id}/update','Admin\AdminController@sortupdate');
    //分类删除
    Route::get('/admin/sort/{id}/destroy','Admin\AdminController@sortdestroy');
    //文章列表
    Route::get('/admin/news1', 'Admin\AdminController@news1index');
    //文章添加页
    Route::get('/admin/news1/create', 'Admin\AdminController@news1create');
    //文章添加
    Route::post('/admin/news1/shore', 'Admin\AdminController@news1shore');
    //文章修改页
    Route::get('/admin/news1/{id}/edit','Admin\AdminController@news1edit');
    //文章修改
    Route::post('/admin/news1/{id}/update', 'Admin\AdminController@news1update');
    //文章删除
    Route::get('/admin/news1/{id}/destroy', 'Admin\AdminController@destroy');

    Route::get('/admin/mysql2', 'Admin\AdminController@mysql2');
// });


//前台页面
//首页
Route::get('/', 'HomeController@index');
//列表页
Route::get('fenlei/{id}', 'HomeController@fenlei');
//内容页
Route::get('article/{id}', 'HomeController@content');
