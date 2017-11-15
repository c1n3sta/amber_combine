score=0;
factor=10;
function calculateClick(flag){
  if(flag)  score+=factor*getTimeScore();
  console.log(score);

}
function calculateOption(flag,n){
      
    }
function getTimeScore(){
  return 1;
}
function toSlide3(){
  $('.screen2').fadeOut(800);
  $('.screen3').fadeIn(800,function() {
    $('.screen3 .bar .hider').animate({height:'80vh'},10000);
  });
}
function toSlide4(){
  $('.screen3').fadeOut(800);
  $('.screen4').fadeIn(800,function() {
    $('.screen4 .bar .hider').animate({height:'80vh'},10000);
  });
}
$(function () {
	

    var ball = document.getElementById('ball');
    var delta=0;
    stopDrag=false;
    var startX=$('#ball').offset().left;
    ball.onmousedown = function(e) {
      //if(stopDrag) return;
      var coords = getCoords(ball);
      var shiftX = e.pageX - coords.left;
      var shiftY = e.pageY - coords.top;
      

      ball.style.position = 'absolute';
     document.body.appendChild(ball);
      moveAt(e);

      ball.style.zIndex = 99990; // над другими элементами

      function moveAt(e) {
         //if(stopDrag) return;
        ball.style.left = e.pageX - shiftX + 'px';
        //ball.style.top = e.pageY - shiftY + 'px';
        delta=$('#ball').offset().left-startX;
        //console.log(delta);
        
      }

      document.onmousemove = function(e) {
        moveAt(e);
      };

      ball.onmouseup = function() {
        document.onmousemove = null;
        ball.onmouseup = null;
        if(delta>400) {
            $('#ball').animate({left:'100vw'},500);
            $('.main').css('filter','blur(0px)');
            stopDrag=true;
        }
        if(delta<-400) {
            $('#ball').animate({left:'-100vw'},500);
            $('.main').css('filter','blur(0px)');
            stopDrag=true;
        }
        delta=0;
        if(!stopDrag) $('#ball').animate({left:'0'},500);
      };
      
    }

    ball.ondragstart = function() {
      return false;
    };


    function getCoords(elem) { // кроме IE8-
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }
    $('.screen1 button').click(function(){
      $('.screen1').fadeOut(800);
      $('.screen2').fadeIn(800,function() {
        $('.screen2 .bar .hider').animate({height:'80vh'},10000);
      });
    });
   
    $('.screen4 button').click(function(){
      $('.screen4').fadeOut(800);
      $('.screen5').fadeIn(800,function() {
        $('.screen5 .bar .hider').animate({height:'80vh'},10000);
      });
    });
    $('.screen5 button').click(function(){
      $('.screen5').fadeOut(800);
      $('.screen6').fadeIn(800,function() {
        $('.screen6 .bar .hider').animate({height:'80vh'},10000);
      });
    });

    $('.checki').click(function(){
      if($(this).attr('checked')==null || $(this).attr('checked')=='0'){
        $(this).attr('checked','1');
        $(this).css('background-image','url(images/galka.png)');
      }else{
        $(this).attr('checked','0');
        $(this).css('background-image','');
      }
    });
   $('img[usemap]').rwdImageMaps();
});