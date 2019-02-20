<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE11" />
	<meta name="renderer" content="webkit" />
	<title>新闻频道_荆楚网_湖北日报网</title>
	<meta name="keywords" content="杭州实创新闻,最新国际消息,最新实时新闻,国际,文化,娱乐,体育,舆情,财经,健康,商业" />
	<meta name="description" content="杭州实创新闻是包含海量资讯的新闻服务平台，真实反映每时每刻的新闻热点。" />
	<link rel="canonical" href="//news.cnhubei.com/">
	<link rel="stylesheet" type="text/css" href="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/index_xwpd.css">
	<link rel="stylesheet" type="text/css" href="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/common_2018.css">
	<link rel="stylesheet" href="/css/app.css">
	<script type="text/javascript" src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets//hbrb/jquery.SuperSlide.2.1.1.js"></script>
	<script type="text/javascript">
		$(function () {
			$(window).scroll(scrolls)
			scrolls()

			function scrolls() {
				var sTop = $(window).scrollTop();
				fl = $('#offset_box').offset().top;
				if (sTop >= fl) {
					$(".xwpd_table_box .hd").css({
						"position": "fixed",
						"top": "0",
						"left": "0",
						"z-index": "99"
					})
					resizewindow();
					$(window).bind("resize", resizewindow);

					function resizewindow() {
						var $globle_link = $(".xwpd_table_box .hd");
						var w_width = $(window).width() - 1200;
						if (w_width > 0) {
							$globle_link.css("left", ($(window).width() - 1200) / 2);
						}
						if (w_width == 0) {
							$globle_link.css("left", 0);
						}
						if (w_width < 0) {
							$globle_link.css("left", 0);
						}
					};
				} else {
					$(".xwpd_table_box .hd").css('position', 'static')
				}
			}
		})
		// $(function(){
		//   $(".jcwzx_right_box").find(".ty_dl").each(function(index){
		//     var ah =$(this).find("dt").outerHeight(true);
		//   var ch = 96
		// $(this).find("dt").css({"margin-top":(ch-ah)/2})
		//})
		//})
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
				var url_a = $(".xwpd_table_box .hd ul .on").index()
				if ($('.loadmore').length > 0 && $('.loadmore').css('display') != 'none') {
					var url = ["http://www.cnhubei.com/index/nei/content?id=163",
						"http://www.cnhubei.com/index/nei/content?id=257", "http://www.cnhubei.com/index/nei/content?id=408",
						"http://www.cnhubei.com/index/nei/content?id=411", "http://www.cnhubei.com/index/nei/content?id=412",
						"http://www.cnhubei.com/index/nei/content?id=415", "http://www.cnhubei.com/index/nei/content?id=256"
					]

					loadmore.children('p').text('加载中...');


					$.getJSON(url[url_a] + '&page=' + page + '&pagesize=15', function (json) {

						console.log(json);
						console.log(json.data.length);
						if (json.data.length > 0) {
							var str = '';
							for (var i = 0; i < json.data.length; i++) {

								str += '<div class="box">';

								str += '<a href="' + json.data[i].url + '">';
								if ($.isArray(json.data[i].thumb)) {
									str += '<img src="' + json.data[i].thumb[0].url + '" class="pic f-fl" />';
								} else {
									str += '<img src="' + json.data[i].thumb.url + '" class="pic f-fl" />';

								}
								str += '</a>';
								str += '<div class="title">';
								str += '<a href="' + json.data[i].url + '">' + json.data[i].title + '</a>';
								str += '</div>';
								if ($.isArray(json.data[i].description)) {
									str += '<div class="des">' + json.data[i].description.substring(0, 60) + '<a href="' + json.data[i].url +
										'">[详细]</a></div>';
								} else {
									str += '<div class="des">' + json.data[i].title + '<a href="' + json.data[i].url + '">[详细]</a></div>';

								}


								str += '<div class="time">';

								if (json.data[i].created.toString().length < 19) {
									json.data[i].created = getDate(json.data[i].created);
								}
								str += '<em>' + json.data[i].created + '</em>';

								str += '</div>';


								str += '</div>';


							}




							//alert(pica)	                    
							//alert(json.data[0].thumb[0].url)
							console.log(json.data.length);
							$('.loadmore-v1').eq(url_a).before(str);
							page += 1;

						} else {
							// $('.loadmore-v1').css("background","url(http://res.yun.cnhubei.com/t/site/10001/67387ec5be6b393bef59a3eb2feee85b/assets/hbrb/images/xwpd_left_more_btn01.jpg) center top no-repeat");
							$('.loadmore-v1').eq(url_a).css({
								"background": "none",
								"font-size": "20px"
							})


							//$('.loadmore-v1').html("<a href='/guonei/index.html'></a>")
							$('.loadmore-v1').eq(url_a).html("没有更多了")
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
	@include('gong.head')
	<div class="blank30"></div>
	<!-- 新闻频道主体 -->
	<div class="w1200" id="xwpd03">
		<div class="xwpd_left">
			<!-- 滚动大图 -->
			<div class="Big_tab_pic">
				<div class="bd cWhite">
					<ul>
						<?php 
							$lunbo = \DB::table('article2s')->orderBy('id','desc')->where('news_pic','<>','')->limit(5)->get();
						?>
						@foreach($lunbo as $v)
						<li><a href="article/{{$v->id}}"><img src="{{$v->news_pic}}" /></a>
							<p><a href="article/{{$v->id}}">{{$v->title}}</a></p>
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
						<li>要闻</li>
						<?php 
							$fenlei = \DB::Table('fenlei2s') ->where('id','<>',6)-> limit(6)->get();
						?>
						@foreach($fenlei as $v)
						<a href="/fenlei/{{$v->id}}">
							<li>{{$v->fenlei_name}}</li>
						</a>

						@endforeach
					</ul>
				</div>
				<div class="blank1" id="offset_box"></div>
				<div class="bd">
					<!-- 要闻 -->
					<div class="news_box" id="news_box">
						<?php
							$zuixin = \DB::Table('article2s') -> orderBy('id','desc') ->where('news_pic','<>','')-> limit(10) -> get();
						?>
						@foreach($zuixin as $v)
						<div class="box"> <a href="/article/{{$v->id}}"><img src="{{$v->news_pic}}" /></a>
							<div class="title"><a href="/article/{{$v->id}}">{{$v->title}}</a></div>
							<div class="des" style="webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{preg_replace('/<.*?>/','',$v->content)}}</div><a
							 href="/article/{{$v->id}}">[详细]</a>
							<div class="time">
								<!--<span>湖北发布</span>--> <em>{{$v->create_time}}</em></div>
						</div>
						@endforeach

					</div> <!-- 要闻 end -->
					@foreach($fenlei as $v)

					<!-- 国内 -->
					<div class="news_box" id="news_box">
						<?php 
							$news = \DB::Table('article2s')->orderBy('id','desc')->where('fenlei_id',$v->id)->where('news_pic','<>','')->where('fenlei_id','<>','6')->limit(10)->get();
						?>
						@foreach($news as $val)
						<div class="box"> <a href="/article/{{$val->id}}"><img src="{{$val->news_pic}}" /></a>
							<div class="title"><a href="/article/{{$val->id}}">{{$val->title}}</a></div>
							<div class="des" style="webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">{{preg_replace('/<.*?>/','',$val->content)}}</div><a
							 href="/article/{{$val->id}}">[详细]</a>
							<div class="time">
								<em>{{$val->create_time}}</em>
							</div>
						</div>
						@endforeach



					</div> <!-- 国内 end -->
					@endforeach
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
	<!-- 新闻频道主体1 end -->

	<div class="blank30"></div>
	<div class="lmy_bottom_div">
		@include('gong.footer')
	</div>
</body>

</html>