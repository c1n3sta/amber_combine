var id=1;
var fs=require("fs");
$(function () {
  
  function getSync(){
    var text = fs.readFileSync('../mapYK/sync', 'utf8');
    if(id!=text) id=$('.sync').html(text);
    //change();    
  }
  var intervall= setInterval(getSync,100);
});
/*
function change(){
	$('video').fadeOut(500).delay(500,function(){
		$(this).src('1');
		$(this).fadeIn(500);
	});
}*/




















