<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Fenlei;
use App\Article;
use App\Mysql2Fenlei;
use Illuminate\Http\Request;
use Faker\Provider\lv_LV\Color;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Session\Session;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $sessioninfo=\Session::all();
        return view('admin.admin');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    
     //用户列表页
     public function userindex()
     {
        $user = User::orderBy('id','desc')->paginate(4);
        return view('admin.user.index', compact('user'));
     }

     //用户添加页
     public function usercreate()
     {
         return view('admin.user.create');
     }

     //添加用户
     public function usershore(Request $request)
     {
        $user = new User;
        $user->user_name = $request->username;
        $user->passwd = $request->passwd;
        if ($user -> save()) {
            return redirect('/admin/user')->with('success','添加成功');
        } else {
            return back()->with('error','添加失败'); 
        }
     }

     //用户修改页面
     public function userupdate($id)
     {
         $user= User::findOrFail($id);
         return view('admin.user.edit',compact('user'));
     }

     //用户提交修改
     public function useredit(Request $request,$id)
     {
         $user = User::findOrFail($id);
         $user -> user_name = $request -> username;
         $user -> passwd = Hash::make($request -> passwd);
         if ($user -> save()) {
            return back()->with('success','修改成功');
         } else {
             return back()->with('error','修改失败');
         }
         return view('admin.user.edit',compact('user'));
     }

     //用户删除
     public function userdestroy($id)
     {
        $user = User::findOrFail($id);
        if ($user->delete()) {
            return back()->with('success','删除成功');
        } else {
            return back()->with('error','删除失败');
        }
     }

     //分类列表
     public function sortindex()
     {
         $fenlei = Fenlei::orderBy('id','desc')->paginate(8);
         return view('admin.sort.index',compact('fenlei'));
     }

     //分类添加页
     public function sortCreate()
     {
        return view('admin.sort.create');
     }

     //分类添加
     public function sortshore(Request $request)
     { 
        $fenlei = new Fenlei;
        $fenlei->fenlei_name = $request->fenlei_name;
        if ($fenlei->save()) {
            return redirect('/admin/sort/')->with('success','添加成功');
        } else {
            return back()->with('error','添加失败');
        }
     }

     //分类修改页
     public function sortedit($id)
     { 
        $fenlei = Fenlei::findOrFail($id);
       return view('admin.sort.edit',compact('fenlei'));
     }

     //分类修改
     public function sortupdate(Request $request,$id)
     { 
        $fenlei = Fenlei::findOrFail($id);
        $fenlei->fenlei_name = $request->fenlei_name;
        if($fenlei->save()) {
            return redirect('/admin/sort')->with('success','修改成功');
        } else {
            return back()->with('error','修改失败');
        }
     }

     //删除分类
     public function sortdestroy($id)
     {
        $fenlei = Fenlei::findOrfail($id);
        if ($fenlei->delete()) {
            return back()->with('success','删除成功');
        } else {
            return back()->with('error','删除失败');
        }
     }


    //第一个网站的文章列表页
    public function news1index()
    {
        $article = Article::orderBy('id','desc')->paginate(8);
        $fenlei = Fenlei::all();
        return view('admin.article.index',compact('article','fenlei'));
    }

    //文章添加
    public function news1create()
    {
        $fenlei = Fenlei::all();
        return view('admin.article.create', compact('fenlei'));
    }
    public function news1shore(Request $request)
    {
        $zuozhe = \Session::get('username');
        $content = new Article;
        $content->title = $request->title;
        $content->zuozhe = $zuozhe;
        $content->fenlei_id = $request->fenlei;
        $content->content = $request->content;
        $content->dianji = rand(100,1000);
        if($request->hasFile('pic')){
            $content->news_pic = '/'.$request->pic->store('news1_pic/'.date('Ymd'));
        }
        if ($content->save()) {
            return redirect('/admin/news1')->with('success','发布成功');
        } else {
            return back()->with('error','发布失败');
        }
    }

    //文章修改页
    public function news1edit($id)
    {
        $article = Article::findOrfail($id);

        // print_r($article);
        // die;

        $fenlei = Fenlei::all();
        return view('admin.article.edit', compact('article','fenlei'));
    }

    //文章修改
    public function news1update(Request $request,$id)
    {
        $article = Article::findOrFail($id);
        $article->title = $request->title;
        $article->fenlei_id = $request->fenlei;
        if ($request->hasFile('pic')) {
            $article->news_pic = '/'.$request->pic->store('news1_pic/'.date('Ymd'));
        }
        $article->content = $request->content;

        if($article->save()) {
            return redirect('admin/news1')->with('success','修改成功');
        } else {
            return back()->with('error','修改失败');
        }


    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    //文章删除
    public function destroy($id)
    {
        //
        $article = Article::find($id);
        if($article->delete())
        {
            return back()->with('success','删除成功');
        } else {
            return back()->with('error','删除失败');
        }
    
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
    //后台登录
    public function login()
    {
        return view('admin.login');
    }

    //登录验证
    public function dologin(Request $request)
    {
        $user = User::where('user_name',$request->username)->first();
        if(!$user){
            return back()->with('error','用户名不存在');
        }else if(Hash::check($request->password, $user->passwd)) {
            session(['username' => $user->user_name, 'id' => $user->id]);
            session(['username'=>$user->user_name, 'id'=>$user->id]);
            return redirect('/admin')->with('success','登录成功');
        }else {
            return back()->with('error','用户名或密码不正确');
        }
        
    }
    //后台退出登录
    public function logout(Request $request)
    {
        $request->session()->flush();
        return redirect('/admin/login');
    }
    
}
