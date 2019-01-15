<div class="article_right_box">
    <div class="blank0"></div>
    <div class="right_pic_list">
        <?php 
                            $new_news = \DB::Table('article2s')->orderBy('id','desc')->where('news_pic','<>','')->limit(3)->get();
                        ?>
        <div class="nav_box"><a href="">最新新闻</a></div>
        @foreach($new_news as $v)
        <div class="jcwlist_rihgt_pic">
            <a href='/article/{{$v->id}}'><img src="{{$v->news_pic}}" alt='{{$v->title}}' title='{{$v->title}}' /></a>
            <p><a href='http://news.cnhubei.com/shehui/p/10083509.html' title='{{$v->title}}'>{{$v->title}}</a></p>
        </div>
        @endforeach
    </div>
    <div class="blank1"></div>
    <div class="right_pic_list">
        <?php 
                        $yvqing = \DB::Table('fenlei2s')->where('fenlei_name','娱乐')->first();
                        $content = \DB::Table('article2s')->orderBy('id','desc')->where('fenlei_id',$yvqing->id)->limit(10)->get();
                    ?>
        <div class="nav_box"><a href="http://yq.cnhubei.com">今日娱乐</a></div>
        <div class="blank15"></div>

        <div class="blank6"></div>
        <ul class="list_erect">
            @foreach($content as $v)
            <li><a href='/article/{{$v->id}}' title='{{$v->title}}'>{{$v->title}}</a></li>
            @endforeach
        </ul>
    </div>
    <div class="blank1"></div>

</div>