<div class="xwpd_right">
    <div class="blank4"></div>
    <div class="jcwzx_right_box">
        <?php 
            $fenlei = \DB::Table('fenlei2s')->where('fenlei_name','财经')->first();
            $caijing = \DB::Table('article2s')->orderBy('id','desc')->where('fenlei_id',$fenlei->id)->limit(8)->get();
        ?>
        <div class="jcwzx_wlwz box">
            <div class="nav_box01"><strong><a href="/fenlei/{{$fenlei->id}}">财经</a></strong>
                <a href="/fenlei/{{$fenlei->id}}" class="jcwzx_right_box_more">更多</a></div>
            {{-- <dl class="ty_dl">
                <a href='http://news.cnhubei.com/gundong/p/10043307.html'><img src='http://img.yun.cnhubei.com/a/10001/201901/ea65cd7f39ecbcf0c2dc3653ab2838e2.jpg'
                     alt='湖北12月网络问政报告：江汉区网群部问政效率高' /></a>
                <dt><a href='http://news.cnhubei.com/gundong/p/10043307.html' title='湖北12月网络问政报告：江汉区网群部问政效率高'>湖北12月网络问政报告：江汉区网群部问政效率高</a></dt>
            </dl> --}}

            <div class="blank10"></div>
            <ul class="list_erect tyhg_ul">
                @foreach($caijing as $v)
                <li><a href='/article/{{$v->id}}' title='{{$v->title}}'>{{$v->title}}</a></li>
                @endforeach

            </ul>
        </div>

    </div>
</div>
<div class="xwpd_right">
    <div class="blank4"></div>
    <div class="jcwzx_right_box">
        <?php 
                $fenlei = \DB::Table('fenlei2s')->where('fenlei_name','健康')->first();
                $caijing = \DB::Table('article2s')->orderBy('id','desc')->where('fenlei_id',$fenlei->id)->limit(8)->get();
            ?>
        <div class="jcwzx_wlwz box">
            <div class="nav_box01"><strong><a href="/fenlei/{{$fenlei->id}}">健康</a></strong>
                <a href="/fenlei/{{$fenlei->id}}" class="jcwzx_right_box_more">更多</a></div>
            {{-- <dl class="ty_dl">
                <a href='http://news.cnhubei.com/gundong/p/10043307.html'><img src='http://img.yun.cnhubei.com/a/10001/201901/ea65cd7f39ecbcf0c2dc3653ab2838e2.jpg'
                     alt='湖北12月网络问政报告：江汉区网群部问政效率高' /></a>
                <dt><a href='http://news.cnhubei.com/gundong/p/10043307.html' title='湖北12月网络问政报告：江汉区网群部问政效率高'>湖北12月网络问政报告：江汉区网群部问政效率高</a></dt>
            </dl> --}}

            <div class="blank10"></div>
            <ul class="list_erect tyhg_ul">
                @foreach($caijing as $v)
                <li><a href='/article/{{$v->id}}' title='{{$v->title}}'>{{$v->title}}</a></li>
                @endforeach

            </ul>
        </div>

    </div>
</div>
<div class="xwpd_right">
    <div class="blank4"></div>
    <div class="jcwzx_right_box">
        <?php 
                    $fenlei = \DB::Table('fenlei2s')->where('fenlei_name','商业')->first();
                    $caijing = \DB::Table('article2s')->orderBy('id','desc')->where('fenlei_id',$fenlei->id)->limit(8)->get();
                ?>
        <div class="jcwzx_wlwz box">
            <div class="nav_box01"><strong><a href="/fenlei/{{$fenlei->id}}">商业</a></strong>
                <a href="/fenlei/{{$fenlei->id}}" class="jcwzx_right_box_more">更多</a></div>
            {{-- <dl class="ty_dl">
                <a href='http://news.cnhubei.com/gundong/p/10043307.html'><img src='http://img.yun.cnhubei.com/a/10001/201901/ea65cd7f39ecbcf0c2dc3653ab2838e2.jpg'
                     alt='湖北12月网络问政报告：江汉区网群部问政效率高' /></a>
                <dt><a href='http://news.cnhubei.com/gundong/p/10043307.html' title='湖北12月网络问政报告：江汉区网群部问政效率高'>湖北12月网络问政报告：江汉区网群部问政效率高</a></dt>
            </dl> --}}

            <div class="blank10"></div>
            <ul class="list_erect tyhg_ul">
                @foreach($caijing as $v)
                <li><a href='/article/{{$v->id}}' title='{{$v->title}}'>{{$v->title}}</a></li>
                @endforeach

            </ul>
        </div>

    </div>
</div>