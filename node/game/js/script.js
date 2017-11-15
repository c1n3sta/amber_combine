function getRandom(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

var speed;
var acceleration;
var fluxCount;
var hp;
var fluxi;
var timerAnimate;

function init(){

  hp=3;
  speed=0;
  acceleration=0.1;
  fluxCount=50;
  accelerationAcceleration=0.00001;
  hp=3;
  fluxi=0;
  $('.hp').show();
  $('.objects').remove();
  timerAnimate=setInterval(function(){animate();},10);
  $('.score').html(0);
}

function addObject(){
  var type=getRandom(0,3);
  var cssClass="bad";
  if(type==0){
    cssClass="good";
  }
  var x=getRandom(0,$(window).width());
  var y=-$(window).height()/20;
  var newElem = $('<div class="'+cssClass+' objects" style="top:'+y+'px;left:'+x+'px" data-speed="'+speed+'" data-type="'+cssClass+'"></div>');
  $('.screenGame').append(newElem);
}

function hideObject(elem){
  elem.remove();
}

function animate(){
  $('.objects').each(function(index){
    //Обработка Соприкосновения
    if($('.hero').offset().top<=$(this).offset().top+$(this).height()-$('.hero').height()/4){
      //На одном уровне вертикальном
      if(Math.abs($('.hero').offset().left-$(this).offset().left)<Math.max($(this).width(),$('.hero').width())){
       if($(this).attr('data-type')=='bad'){
          minusHealth();
       }else{
          $('.score').html(parseInt($('.score').html())+1);
       }
        hideObject($(this));
      }
    }
    //Движение
    lastY=parseFloat($(this).css('top'));
    lastSpeed=parseFloat($(this).attr('data-speed'));
    lastSpeed+=acceleration;
    y=lastY+lastSpeed+acceleration/2;
    acceleration+=accelerationAcceleration;
    if(y>$(window).height()) {
      hideObject($(this));
    }else{
      $(this).css('top',y);
      $(this).attr('data-speed',lastSpeed);
    }
  });
  //Добавление объектов
  fluxi++;
  if(fluxCount==fluxi) {
    fluxi=0;
    if(fluxCount>20) fluxCount-=1;
    addObject();
  }
}

function minusHealth(){
  $('#hp'+hp).hide();
  hp--;
  if(hp==0) {
    clearInterval(timerAnimate);
    $('.screenGame').fadeOut(300,function(){$('.screenEnd').fadeIn(300)});
  }
}

$(document).on('mousemove',function(e){
  $('.hero').css('left',e.pageX-$('.hero').width()/2);
  var y=e.pageY;
  if(y<0.8*$(window).height()) y=0.8*$(window).height();
  $('.hero').css('top',y-$('.hero').height()/2);
});

$(document).on('touchmove',function(e){
  $('.hero').css('left',e.originalEvent.changedTouches[0].clientX-$('.hero').width()/2);
});

$('.begin').click(function(){
  init();
  $('.screenHome').fadeOut(300,function(){$('.screenGame').fadeIn(300)});
});

$('.begin').on('touchstart',function(){
  init();
  $('.screenHome').fadeOut(300,function(){$('.screenGame').fadeIn(300)});
});

$('.end').click(function(){
  $('.screenEnd').fadeOut(300,function(){$('.screenHome').fadeIn(300)});
});

$('.end').on('touchstart',function(){
  $('.screenEnd').fadeOut(300,function(){$('.screenHome').fadeIn(300)});
});