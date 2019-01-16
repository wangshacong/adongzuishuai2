<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11" />
    <meta name="renderer" content="webkit" />
    <title>{{$dangqian_fenlei['fenlei_name']}}频道</title>
    <link rel="stylesheet" type="text/css" href="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets/hbrb/index_xwpd.css">
    <link rel="stylesheet" type="text/css" href="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets/hbrb/common_2018.css">
    <script type="text/javascript" src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets/hbrb/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets/hbrb/jquery.SuperSlide.2.1.1.js"></script>
    <script>
        var listid = 450;
    </script>
    <script>
        $(function () {
            //首页文字居中
            var loadmore = $('.news_box');
            if (($('.box').length - 1) < 15) {
                $('#loadmore-v1').css({
                    "background": "none",
                    "font-size": "20px"
                })
                $('#loadmore-v1').html("没有更多了")
            }
            var n = 15;
            var page = 2;
            loadmore.click(function () {
                if ($('.loadmore').length > 0 && $('.loadmore').css('display') != 'none') {
                    var url = "/index/nei/content?id=" + listid;
                    loadmore.children('p').text('加载中...');
                    $.getJSON(url + '&page=' + page + '&pagesize=15', function (json) {
                        console.log(json);
                        console.log(json.data.length);
                        if (json.data.length > 0) {
                            var str = '';
                            for (var i = 0; i < json.data.length; i++) {
                                str += '<div class="box">';
                                str += '<a href="' + json.data[i].url + '">';
                                if ($.isArray(json.data[i].thumb)) {
                                    str += '<img src="' + json.data[i].thumb[0].url +
                                        '" class="pic f-fl" />';
                                } else {
                                    str += '<img src="' + json.data[i].thumb.url +
                                        '" class="pic f-fl" />';
                                }
                                str += '</a>';
                                str += '<div class="title">';
                                str += '<a href="' + json.data[i].url + '">' + json.data[i].title +
                                    '</a>';
                                str += '</div>';
                                if ($.isArray(json.data[i].description)) {
                                    str += '<div class="des">' + json.data[i].description.substring(
                                            0, 60) + '<a href="' + json.data[i].url +
                                        '">[详细]</a></div>';
                                } else {
                                    str += '<div class="des">' + json.data[i].title +
                                        '<a href="' + json.data[i].url + '">[详细]</a></div>';
                                }
                                str += '<div class="time">';
                                if (json.data[i].created.toString().length < 19) {
                                    json.data[i].created = getDate(json.data[i].created);
                                }
                                str += '<em>' + json.data[i].created + '</em>';
                                str += '</div>';
                                str += '</div>';
                            }
                            console.log(json.data.length);
                            $('#loadmore-v1').before(str);
                            page += 1;
                        } else {
                            // $('#loadmore-v1').css("background","url(http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets/hbrb/images/xwpd_left_more_btn01.jpg) center top no-repeat");
                            $('#loadmore-v1').css({
                                "background": "none",
                                "font-size": "20px"
                            })


                            //$('#loadmore-v1').html("<a href='/guonei/index.html'></a>")
                            $('#loadmore-v1').html("没有更多了")
                        }
                    });
                }
            });
        })

        function getDate(tm) {
            var timestamp3 = tm;
            var newDate = new Date();
            newDate.setTime(timestamp3 * 1000);
            Date.prototype.format = function (format) {
                var second = this.getSeconds();
                if (parseInt(second) < 10) {
                    second = '0' + second;
                }

                var date = {
                    "M+": this.getMonth() + 1,
                    "d+": this.getDate(),
                    "h+": this.getHours(),
                    "m+": this.getMinutes(),
                    "s+": this.getSeconds(),
                    "q+": Math.floor((this.getMonth() + 3) / 3),
                    "S+": this.getMilliseconds()
                };
                if (/(y+)/i.test(format)) {
                    format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
                }
                for (var k in date) {
                    if (new RegExp("(" + k + ")").test(format)) {
                        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
                            date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                    }
                }
                return format;
            }
            return newDate.format('yyyy-MM-dd hh:mm:ss');

        }
    </script>
</head>

<body>
    @include('gong.head')
    <!-- 新闻频道主体 -->
    <div class="w1200" id="xwpd03">
        <div class="xwpd_left">
            <!-- 滚动大图 -->
            <div class="Big_tab_pic">
                <div class="bd cWhite">
                    <ul>

                        @foreach($lunbo as $v)
                        <li><a href="/article/{{$v->id}}"><img src="{{$v->news_pic}}" /></a>
                            <p><a href="/article/{{$v->id}}">{{$v->title}}</a></p>
                        </li>
                        @endforeach
                    </ul>
                </div>
                <div class="hd">
                    <ul class="list_across">
                    </ul>
                </div>
            </div>
            <script type="text/javascript">
                jQuery(".Big_tab_pic").slide({
                    mainCell: ".bd ul",
                    titCell: ".hd ul",
                    autoPlay: true,
                    autoPage: true,
                    effect: "leftLoop"
                });
            </script>
            <!-- 滚动大图 end -->
            <div class="blank30"></div>
            <!-- tab列表 -->
            <div class="xwpd_table_box">
                <div class="hd">
                    <ul class="list_across">
                        <li>推荐</li>
                    </ul>
                </div>
                <div class="blank1" id="offset_box"></div>
                <div class="bd">
                    <!-- 推荐 -->
                    <div class="news_box" id="news_box">
                        @foreach($article as $v)
                        <div class="box"> <a href="/article/{{$v['id']}}"><img src="{{$v['news_pic']}}" /></a>
                            <div class="title"><a href="/article/{{$v['id']}}">{{$v['title']}}</a></div>
                            <div class="des" style="webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{preg_replace('/<.*?>/','',$v->content)}}</div><a href="/article/{{$v->id}}">[详细]</a>
                            <div class="time">
                                <!--<span>湖北发布</span>--> <em>{{$v['create_time']}}</em></div>
                        </div>
                        @endforeach
                        {{$article->appends(request()->all())->links()}}

                        <!--	<a href="" id="more_news"><img src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets/images/xwpd_left_more_btn.jpg" /></a>-->

                    </div> <!-- 推荐 end -->
                </div>
                <script type="text/javascript">
                    jQuery(".xwpd_table_box").slide({
                        mainCell: ".bd",
                        titCell: ".hd li",
                        autoPlay: false
                    });
                </script>
            </div>
            <!-- tab列表 end -->
        </div>
        @include('gong.right2')
    </div>
    <!-- 新闻频道主体 end -->

    <div class="blank30"></div>
    @include('gong.footer')
</body>

</html>