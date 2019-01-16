<!-- 顶部导航 -->
	<!--<div class="lmy_topnav_zw" id="">-->

	<!--</div>-->
	<!-- 顶部导航 end -->
	<div class="blank0"></div>
	<!-- 头部部分 -->
	<div class="w1200 xwpd_top_box" id="xwpd01">
		<a href="/"><img class="logo" src="/images/hangzhou.png" /></a>
		{{-- <div class="search_box">
			<div class="box"></div>
			<div class="searchbox">
				<form action="/s" name="search" method="get">

					<div class="s_text">
						<input type="text" name="wd" id="wd" value="" autocomplete="on" placeholder="请输入关键字" />

					</div>
					<div class="s_button">
						<input type="submit" id="search-btn" />
					</div>
				</form>

			</div>
		</div> --}}
	</div>
	<!-- 头部部分 end -->
	<div class="blank0"></div>
	<!-- 新闻频道导航 -->
	<div class="xwpd_nav" id="xwpd02">
		<div class="w1200">
			<ul class="list_across">
				<li class="first"><a href="/">首页</a></li>
				@foreach($fenlei as $v)
				<li class="first"><a href="/fenlei/{{$v['id']}}">{{$v['fenlei_name']}}</a></li>
				@endforeach
			</ul>
		</div>
	</div>
	<!-- 新闻频道导航 end -->