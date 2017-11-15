<?php
require_once("db.php");
$width=800;

?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>CINESTA</title>
<link rel="icon" href="/img/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon">
<script src="/jquery-2.0.2.min.js"></script>
<script type="text/javascript" src='/js/threesixty.min.js'></script>
<script type="text/javascript" src="/js/prism.js"></script>
<script src="/js/jquery.elevateZoom-3.0.8.min.js" type="text/javascript"></script>
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
img
{
	width: <?php echo $width;?>px;
	position: absolute;
    top: 0;
    height: auto;
	
}
#iframe{
	width: <?php echo $width;?>px;
}
.imgArray {
    display: none;
    list-style: none;
    margin: 0;
    margin-top:-5px;
    padding: 0;
 }
 .imgArray .current-image {
    visibility: visible;
    
}
 .imgArray .previous-image {
    visibility: hidden;
    
}
.nav_bar{
	position: absolute;
	top: 0;
	z-index:100;
  display: none;
}
.spinner{
  width:150px;
  height:150px;
  margin-top:180px!important;
  margin:auto;
  color:#fff;
  background:url(img/load.gif) no-repeat;
  background-size: 150px;
}
.product{
  width:100%!important;
  vertical-align: middle;
  cursor: pointer;
}
.i360{
      background:url(/img/360.gif);
      background-size: 160px;
      position: absolute;
      bottom: 20px;
      right: 20px;
      width:160px;
      height:160px;
      z-index:20;
    }
</style>

<script>
	
	
</script>
</head>
<body style="padding:0px;margin:0px;">
<div id="iframe">
	  <div class="product">
      <div class="i360"></div>
        <div class="spinner">
          <span>0%</span>
        </div>
        <ol class="imgArray">
        	
        </ol>
      </div>

</div>
<script type="text/javascript">
	$(function () {

	//Click mode.
	var product = $("#iframe .product").ThreeSixty({
        totalFrames: <?php echo $_GET['num']; ?>, // Общее число кадров
        endFrame: <?php echo $_GET['num']; ?>, // конечный кадр
        currentFrame: 1, // с какого кадра стартовать
        progress: '.spinner',
        imgList: '.imgArray', // селектор изображений
        imagePath:'/img/cv/<?php echo $_GET['folder']; ?>/big/', // путь к папке с изображениями
        filePrefix: '<?php echo $_GET['name']; ?>_', // префикс файлов
        ext: '.jpg', // формат изображения
        autoplayDirection:-1,
        navigation: true
    });
    /*product.play();
    $("#iframe").click(function() {
      product.stop();
    });*/
	

	});
</script>
</body>
</html>
