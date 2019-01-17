<!-- 加载普通模板 -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    @foreach($content as $v)
    <title>{{$v['title']}}</title>
    @endforeach
    <meta itemprop="description" name="description" content="1月8日，鄂州市在今年《政府工作报告》中提出，将全面推进鄂州机场建设和空港经济发展。" />
    <meta itemprop="name" content="鄂州机场主体工程2019年全面启建" />
    <meta name="keywords" content="鄂州机场;全面开建" />
    <link rel="canonical" href="http://wwwwww.cnhubei.com/">
    <meta itemprop="image" content="http://wwwwww.cnhubei.com/images/640logo.jpg" ignoreapd="1" />
    <link rel="stylesheet" type="text/css" href="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/index_wangbanzi_201801.css">
    <link rel="stylesheet" type="text/css" href="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/common_2018.css">
    <link rel="stylesheet" type="text/css" href="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/index_xwpd.css">
    <link rel="stylesheet" href="/css/app.css">
    <script type="text/javascript" src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/jquery.SuperSlide.2.1.1.js"></script>
    <script type="text/javascript" src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/jquery.mousewheel.min.js"></script>
    <!--js区块 -->
    <!--js区块1 -->
    <base target="_blank" />
    <script type="text/javascript">
        $(function () {
            //	var Allw = $(window).width();
            //	var mainw= $('.lmy_box02').outerWidth();
            //	var clsoeleft = (Allw - mainw)/2;	
            //	$('.lmy_close_btn').css({right:(clsoeleft-20)+'px'});
            //	$('#cjly_nav01').css({left:(clsoeleft+40)+'px'});
            //	var toph01= $('.lmy_topnav01').outerHeight();
            //	var toph02= $('#lmy_information01').outerHeight();
            //	var toph03= $('.lmy_box02 h1').outerHeight();
            //	var toppf = toph01 + toph02 + toph03 + 58
            //	$('#cjly_nav01').css({top:(toppf)+'px'});
            resizewindow();
            $(window).bind("resize", resizewindow);

            function resizewindow() {
                var $globle_link = $("#cjly_nav01");
                var w_width = $(window).width() - 1160;
                if (w_width > 0) {
                    $globle_link.css("left", ($(window).width() - 1200) / 2 + 40);
                }
                if (w_width == 0) {
                    $globle_link.css("left", 0);
                }
                if (w_width < 0) {
                    $globle_link.css("left", 0);
                }


            };


            $(window).scroll(scrolls)
            scrolls()

            function scrolls() {

                var top_h01 = $('#lmy h1').outerHeight();
                var top_h011 = $('#wzygg01').outerHeight();
                var top_h012 = $('#wzygg011').outerHeight();
                var top_h013 = $('#wzygg02').outerHeight();
                var top_h02 = top_h01 + top_h011 + top_h012 + top_h013 + 103 + 50 + 21 + 15 + 30

                var sTop = $(window).scrollTop();
                fl = $('#lmy').offset().top;
                //alert(sTop)   		   			   
                if (sTop >= fl) {

                    $(".lmy_topnav01").css({
                        "position": "fixed",
                        "top": "0",
                        "left": "0",
                        "z-index": "99"
                    })
                    $("#cjly_nav01").css('top', '110px')


                } else {
                    $(".lmy_topnav01").css('position', 'static')
                    $('#cjly_nav01').css({
                        top: (top_h02) + 'px'
                    })
                }
            }


            //	$('#lmy_bottom_div01').css({"margin-top":(toph01+toph02+70+50)+'px'});
            //	
            //	
            //	$('.all_link').css({"height":(toph01+toph02+toph03+70+50)+'px'});

        })

        //		$(function(){
        //
        //	   $(window).scroll(scrolls)
        //	   scrolls()
        //	   function scrolls(){
        //		   var sTop = $(window).scrollTop();  
        //		   var sTop_h = $(document).height()-917;
        //           var sTop_h01 = sTop_h-sTop
        //		   //alert(sTop_h01)
        //		   if(sTop_h01<=334){
        //			   $(".bottom_navbox01").fadeOut(300).css('display','none')
        //			   }
        //		   else{
        //			   $(".bottom_navbox01").fadeIn(300).css('display','block')
        //			   }
        //
        //		
        //	     }
        //
        //		})


        $(window).mousewheel(function (event) {
            console.log(event.deltaX, event.deltaY, event.deltaFactor);
            if (event.deltaY > 0) {
                $("#lmy_top_nav01").slideDown();
            } else if (event.deltaY < 0) {
                $("#lmy_top_nav01").slideUp();

            }


        });
    </script>
    <script>
        $(function () {



            $("#weixin_share").click(function () {
                $('.ma_box').show();

            });
            $(".close").click(function () {

                $('.ma_box').hide();
            });

        })
    </script>
    <script>
        var _hmt = _hmt || [];
        (function () {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?a25f6411fa52c7938d644a4b4d070b95";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
</head>

<body>
    <div class="w1200" id="wzygg01">



    </div>
    <style>
        .ma_box {
            width: 160px;
            height: 160px;
            padding: 15px 5px 5px 5px;
            border: 1px solid #CCC;
            background-color: #FFF;
            z-index: 999;
            position: absolute;
            left: 46px;
            top: 30px;
            overflow: hidden
        }

        .ma_box img {
            width: 160px;
            height: 160px;
        }

        .ma_box span {
            width: 16px;
            height: 16px;
            font-size: 16px;
            color: #999;
            position: absolute;
            top: 0px;
            right: 0px;
            display: block;
            line-height: 16px;
            cursor: pointer
        }

        .ma_box span:hover {
            color: #F00
        }
    </style>
    <!--<a href="" class="lmy_close_btn"></a>-->


    <div class="cjly_nav" id="cjly_nav01">
        <a id="weixin_share"><img src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/images/weixin_btn_t.jpg" /></a>
        <div class="ma_box" style="display:none"><span class="close">×</span><img src="http://bshare.optimix.asia/barCode?site=weixin&url=http://www.cnhubei.com/p/10076998.html" /></div>
        <a href="http://api.bshare.cn/share/qqim?url=http://www.cnhubei.com/p/10076998.html&title=鄂州机场主体工程2019年全面启建&summary=1月8日，鄂州市在今年《政府工作报告》中提出，将全面推进鄂州机场建设和空港经济发展。&publisherUuid=f1e1ed8e-8d96-49fb-8f02-decd607a85ce&pic="><img
                src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/images/qq_btn_t.jpg" /></a>
        <a href="http://api.bshare.cn/share/qzone?url=http://www.cnhubei.com/p/10076998.html&title=鄂州机场主体工程2019年全面启建&summary=1月8日，鄂州市在今年《政府工作报告》中提出，将全面推进鄂州机场建设和空港经济发展。&publisherUuid=f1e1ed8e-8d96-49fb-8f02-decd607a85ce&pic="><img
                src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/images/qzone_btn_t.jpg" /></a>
        <a href="http://api.bshare.cn/share/sinaminiblog?url=http://www.cnhubei.com/p/10076998.html&title=鄂州机场主体工程2019年全面启建&summary=1月8日，鄂州市在今年《政府工作报告》中提出，将全面推进鄂州机场建设和空港经济发展。&publisherUuid=f1e1ed8e-8d96-49fb-8f02-decd607a85ce&pic="><img
                src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/images/weibo_btn_t.jpg" /></a>
    </div>

    @include('gong.head')
    <div class="blank0"></div>
    <!-- 文章页主体 -->
    <div class="lmy_box02" id="lmy">
        @foreach($content as $v)
        <?php 
        $fenlei = \DB::Table('fenlei2s')->where('id',$v['fenlei_id'])->get();
        ?>
        <div class="lmy_dw">
            <a href="/">杭州实创</a>
            @foreach($fenlei as $val)
            <a href="http://news.cnhubei.com/hbxw15704/index.html"> > {{$val->fenlei_name}}</a>
            @endforeach
            <a href=""> > 正文</a>

        </div>
        @endforeach
        <div class="blank15"></div>
        @foreach($content as $v)
        <h1>{{$v['title']}}</h1>

        <!-- 文章页信息栏 -->
        <div id="lmy_information01">
            <div class="w1000 information_box right">
                <span>{{$v['create_time']}}</span> <span style="margin-left:8px;">来源：</span>
                <a href="javascript:;" target="_blank">{{$v['zuozhe']}}</a>
            </div>
        </div>
        <!-- 文章页信息栏 end -->

        <div class="w1000 right" id="article_div02">
            <div class="article_left_box02">

                <div class="article_w">
                    <!-- 正文 -->
                    <?php echo str_replace('<img src="','<img src="http://news.cnhubei.com',$v['content']); ?>
                    <!-- 正文 end -->
                    @endforeach
                    <!-- 正文代码 -->
                    <div class="blank15"></div>

                </div>
                @foreach($fenlei as $v)
                <?php 
                    $related = \DB::Table('article2s')->orderBy('id','desc')->where('fenlei_id',$v->id)->limit(5)->get();
                ?>
                @endforeach
                <div class="jcwsy_content_left_nav">
                    <div class="nav_title">相关新闻</div>
                </div>
                <ul class="list_erect" id="document_news_list">
                    @foreach($related as $v)
                    <li><a href="/article/{{$v->id}}" class="f14px">{{$v->title}}</a></li>
                    @endforeach
                </ul>
                <div class="blank0" style="height:20px;"></div>
                <div class="jcwsy_content_left_nav">
                    <div class="nav_title">编辑推荐</div>
                </div>
                <div class="jcwsy_content_zw">
                    <?php 
                        $recommend_article = \DB::Table('article2s')->orderBy('id','desc')->where('news_pic','<>','')->limit(5)->get();
                    ?>
                    @foreach($recommend_article as $v)
                    <div class="news_list_box">
                        <a href="/article/{{$v->id}}"><img src="{{$v->news_pic}}" alt="{{$v->title}}"></a>
                        <div class="news_list_box_right">
                            <div class="title"><a href="/article/{{$v->id}}" title="{{$v->title}}">{{$v->title}}</a></div>
                            <div class="time"><span>{{$v->create_time}}</span></div>
                        </div>
                    </div>
                    @endforeach
                </div>

            </div>

            @include('gong.right')
        </div>
    </div>
    <!-- 文章页主体 end -->

    <div class="blank0"></div>

    <!-- 文章页底部  -->
    <div class="lmy_bottom_div" id="lmy_bottom_div01">
        <!--
    <div class="bottom_navbox01">
        <div class="w1140">
            <a href=""><img src="http://res.yun.cnhubei.com/assets/images/hbrb/lmy_logo.png" class="logo" /></a>
            <div class="box">
                <a href=""><strong>新闻</strong></a>
                <a href="">政务</a>
                <a href="">党建</a>
                <a href=""><strong>讲习所</strong></a>
                <a href="">国内</a>
                <a href="">国际</a>
                <a href=""><strong>文化</strong></a>
                <a href="">娱乐</a>
                <a href="">体育</a>
                <a href=""><strong>东湖社区</strong></a>
                <a href="">舆情</a>
                <a href="">微善</a>
                <a href=""><strong>文明网</strong></a>
                <a href="">教育</a>
                <a href="">健康</a>
            </div>
            <div class="box">
                <a href=""><strong>滚动</strong></a>
                <a href="">评论</a>
                <a href="">专题</a>
                <a href=""><strong>荆楚号</strong></a>
                <a href="">视频</a>
                <a href="">图片</a>
                <a href=""><strong>财经</strong></a>
                <a href="">房产</a>
                <a href="">汽车</a>
                <a href=""><strong>荆楚问政</strong></a>
                <a href="">科普</a>
                <a href="">质量</a>
                <a href=""><strong>青春志</strong></a>
                <a href="">旅游</a>
                <a href="">商业</a>
            </div>
        </div>
    </div>-->

        <div class="blank0"></div>
        @include('gong.footer')
    </div>
    <!-- 文章页底部 end -->
    <!-- 文章页公共区块 -->
</body>

</html>