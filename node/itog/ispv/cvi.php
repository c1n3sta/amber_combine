<?php
require_once("db.php");


?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CINESTA</title>
<link rel="icon" href="/img/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
<script src="jquery-2.0.2.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/matdumsa/jQuery.threesixty/master/jquery.threesixty.js"></script>
<script type="text/javascript" src="jquery.zclip.js"></script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-76579922-1', 'auto');
  ga('send', 'pageview');

</script>
<style type="text/css">
body{
	font-family:sans-serif;	
}
#main{
	width:1206px;
	margin:auto;
}

#items{
	width:100%;
	margin-top: 0px;
}
.item{
	width:402px;
	height:402px;
	cursor:pointer;
	background-color: #000;
	float:left;
}
.look{
	width:100%;
	height:402px;
	opacity: 1;
	position: relative;

}
.look:hover{
	opacity: .65
}
.look:hover > .title{
	display:block;
}
.title{
	color:#fff;
	font-size: 24px;
	position: absolute;
	z-index: 30;
	text-shadow:#000 0 0 4px;
	top:30px;
	left:0px;
	width:400px;
	display: none;
	text-align: center;
}
#item1 .look{
	background-image: url(/img/cv/item1/item1s.jpg);
	
}
#item2 .look{
	background-image: url(/img/cv/item3/item3s.jpg);
	
}
#item3 .look{
	background-image: url(/img/cv/item4/item4s.jpg);
	
}
#item5 .look{
	background-image: url(/img/cv/item5/item5s.jpg);
	
}
#item6 .look{
	background-image: url(/img/cv/item6/item6s.jpg);
	
}
#item7 .look{
	background-image: url(/img/cv/item7/item7s.jpg);
	
}
#item8 .look{
	background-image: url(/img/cv/item8/item8s.jpg);
	
}
#item9 .look{
	background-image: url(/img/cv/item9/item9s.jpg);
	
}
#item10 .look{
	background-image: url(/img/cv/item10/item10s.jpg);
	
}
#item11 .look{
	background-image: url(/img/cv/item11/item11s.jpg);
	
}
#item12 .look{
	background-image: url(/img/cv/item12/item12s.jpg);
	
}
#item13 .look{
	background-image: url(/img/cv/item13/item13s.jpg);
	
}
#item14 .look{
	background-image: url(/img/cv/item14/item14s.jpg);
	
}
#item15 .look{
	background-image: url(/img/cv/item15/item15s.jpg);
	
}
#item16 .look{
	background-image: url(/img/cv/item16/item16s.jpg);
	
}
#item17 .look{
	background-image: url(/img/cv/item17/item17s.jpg);
	
}
#item18 .look{
	background-image: url(/img/cv/item18/item18s.jpg);
	
}
#item19 .look{
	background-image: url(/img/cv/item19/item19s.jpg);
	
}
#item20 .look{
	background-image: url(/img/cv/item20/item20s.jpg);
	
}
#item21 .look{
	background-image: url(/img/cv/item21/item21s.jpg);
	
}
#item22 .look{
	background-image: url(/img/cv/item22/item22s.jpg);
	
}
#item23 .look{
	background-image: url(/img/cv/item23/item23s.jpg);
	
}
#item24 .look{
	background-image: url(/img/cv/item24/item24s.jpg);
	
}
#item25 .look{
	background-image: url(/img/cv/item25/item25s.jpg);
	
}
#item26 .look{
	background-image: url(/img/cv/item26/item26s.jpg);
	
}
#item27 .look{
	background-image: url(/img/cv/item26/item26s.jpg);
	
}
#item28 .look{
	background-image: url(/img/cvs/item7/big/item7_4_6.jpg);
	
}
.look{
	background-size: 402px;
}
.i360{
	background:url(/img/360.gif);
	background-size: 80px;
	position: absolute;
	bottom: 20px;
	right: 20px;
	width:80px;
	height:80px;
	z-index:20;
}
.play{
	background:url(/img/play.png);
	background-size: 80px;
	position: absolute;
	bottom: 160px;
	right: 160px;
	width:80px;
	height:80px;
	z-index:20;	
}
#player{
	width:804px;
	margin:auto;
}
</style>

<script>
	//$(window).on('scroll', function() {
		
    	//if ($(window).scrollTop() >= 214) $('#player').addClass('player-fixed');
        //else $('#player').removeClass('player-fixed');
   // });
	
</script>
</head>
<body bgcolor="#fff" style="height:100%;padding:0px;margin:0px;min-width:800px;">


<div id="main">

	<div style="text-align:center;margin-top:40px;width:100%"><img src="/img/logo_cv.png" width="300"></div>
	
	<div id="player"></div>
	<div id="items">
	<!--<div class="item" id="item26">
			<div class="look">
			<div class="title">Янтарь спин-фото</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item25">
			<div class="look">
			<div class="title">Янтарь спин-фото без свечения</div>
			<div class="i360"></div>
			</div>
		</div>
	-->
		<div class="item" id="item27">
			<div class="look">
			<div class="title">Янтарь спин-фото</div>
			<div class="i360"></div>
			</div>
		</div>
		
	<div class="item" id="item24">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
	<div class="item" id="item17">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item16">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item11">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		
		
		<!--<div class="item" id="item14">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>-->
		<div class="item" id="item15">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>

		
		<div class="item" id="item18">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item19">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item12">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item20">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item28">
			<div class="look">
				<div class="title">Спин-фото (3d фото с вращением)</div>
				<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item10">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item3">
			<div class="look">
			<div class="title">Спин-фото (3d фото с вращением)</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item21">
			<div class="look">
			<div class="title">Эрмитаж</div>
			<div class="play"></div>
			</div>
		</div>
		<div class="item" id="item22">
			<div class="look">
			<div class="title">Coffe3</div>
			<div class="play"></div>
			</div>
		</div>
		<div class="item" id="item6">
			<div class="look">
			<div class="title">Предметная видеосъемка</div>
			<div class="play"></div>
			</div>
		</div>
		<div class="item" id="item2">
			<div class="look">
			<div class="title">Фото-каталог</div>
			</div>
		</div>
		<!--
		<div class="item" id="item7">
			<div class="look">
			<div class="title">Видео-обзор</div>
			<div class="play"></div>
			</div>
		</div>-->
		<div class="item" id="item23">
			<div class="look">
			<div class="title">3d</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item5">
			<div class="look">
			<div class="title">Фото-коллаж</div>
			</div>
		</div>
		<!--<div class="item" id="item8">
			<div class="look">
			<div class="title">котик</div>
			<div class="i360"></div>
			</div>
		</div>
		<div class="item" id="item9">
			<div class="look">
			<div class="title">собачка</div>
			<div class="i360"></div>
			</div>
		</div>-->
		<div style="clear:both"></div>
	</div>
</div>
<script>
	<?php
	$n=40;
	for($i=1;$i<=$n;$i++){
	?>
		$('#item<?php echo $i;?> .look').click(function(){

			 $.ajax({
			 			type: 'POST',
			 			url: '/ajax.php',
						data: {cv_item_click:<?php echo $i;?>},
			 			success: function(data) {
			 				console.log(data);
			 					arr=data.split('|');
			 					$('#player').html('<div style="float:left;width:804px;">' + arr[0] + '</div><!--<div style="float:left;width:402px;"><h2>' + arr[1] + '</h2>' + '<div class="description">' + arr[2] + '</div></div>--><div style="clear:both"></div>');
								

			 			},
					});
		});

	<?php 
	}
	?>
	$('#item27 .look').click();
	function scrollToElement(theElement) {
		var selectedPosX = 0;
		var selectedPosY = 0;
		selectedPosY += theElement.offset().top;                         
		$("html, body").animate({ scrollTop: selectedPosY }, 700);
	}
	$('.look').click(function(){
        scrollToElement($('#player'));  
    });
	
</script>
<div style="height:20px;"></div>
</body>
</html>
