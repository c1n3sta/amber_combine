
var time=60;
var timeMax=60;

$(function () {
  function keyfunc(e){
  if(e.keyCode==112) window.close();
  }
  addEventListener("keydown",keyfunc);
  $(".time").slider({
    orientation: "vertical",
    range: "max",
    min: 0,
    max: timeMax,
    value: 60,
    slide: function( event, ui ) {
      time=ui.value;
      change();
    }
  });
  colorMin=0x55; // 0x5
  colorMax=0xbb; // 0xb
  durationMax=8;
  duration=durationMax;
  dashNum=3150;
  function change(){
    if(scene!=0) return false;
    $('#svg path').css('stroke-dashoffset',dashNum-(time/timeMax)*dashNum);
    var color=Math.round((colorMax-colorMin)/timeMax*(timeMax-time)+colorMin);
    $('#svg path').css('stroke','rgb('+color + ','+color + ','+color+')');
    duration=time/timeMax*durationMax;
    $('#stroke-dashoffset').attr('dur',duration+'s');
  }
  

  var video = document.getElementsByTagName('video')[0];
  var IntervalId=null;
  video.addEventListener('play', function () {
      IntervalId=setInterval(inti,100);
  }, false);
  function inti() {
    if(video.currentTime>=duration) {
      video.pause();
      scene=2;
      clearInterval(IntervalId);
    }
  }

  var scene=0;
  $('#svg').click(function(){
    change();
    if(scene==0){
      video.play();
      document.getElementById('stroke-dashoffset').beginElement();
      scene=1;
    }else if(scene==1){

    }else if(scene==2){
      $('.center-frame').fadeOut(500,function(){
        var elem=$('.circle').clone();
        $('#svg').prepend(elem);
        $(".circle:last").remove();
        video.currentTime=0;
        $('.center-frame').fadeIn(500);
        $('.time').slider("value",time);
        scene=0;
        change();
      });   
    }
  });

var fs=require("fs");
 
  function getSync(){
    var text = fs.readFileSync('test', 'utf8');
    var args=text.split('|');
    time=Math.round(parseInt(args[0])/1024*60);
    $('.time').slider("value",time);

    change();

    $('.left-frame').html(args[1]);
  }
  var intervall= setInterval(getSync,100);
  change();
});
