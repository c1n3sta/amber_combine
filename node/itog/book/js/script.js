$(function(){

function keyfunc(e){
	if(e.keyCode==112) window.close();
}
addEventListener("keydown",keyfunc);
try{
  var colorsys = require('colorsys');
  $('.screen').booklet({
    
  });
  video = $("#video")[0];
  videoObj = { "video": true };
  errBack = function(error) {
    console.log("Ошибка видео захвата: ", error.code);
  };
  function sleep(millis)
  {
      var date = new Date();
      var curDate = null;
      do { curDate = new Date(); }
      while(curDate-date < millis);
  }
  // Подключение потока
  if(navigator.getUserMedia) {
    navigator.getUserMedia(videoObj, function(stream) {
      video.src = window.URL.createObjectURL(stream);
      //video.src = stream;
      video.play();
    }, errBack);
  } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia(videoObj, function(stream){
      video.src = window.webkitURL.createObjectURL(stream);
      video.play();
    }, errBack);
  }

  // Получение и отправка изображения

  var intervalID=setInterval(function(){getImg()},50);
  var home=false;
  var costil=0;
  var hsvHome;
  var hsvHomeArray;
  var hsvArray=[];
  var homeCanvasContext=$("#home")[0].getContext("2d");
  var frameCanvasContext=$("#frame")[0].getContext("2d");
  var widthVideo=24;
  var heightVideo=18;
  var zoneCount=4;
  var zoneWeight=zoneCount/2;
  homeCanvasContext.drawImage(video, 0, 0, widthVideo, heightVideo);
  frameCanvasContext.drawImage(video, 0, 0, widthVideo, heightVideo);
  var iterationArray=[];
  var weightArray=[];
  var zhestArray=[];
  var zhestArrayLast=[];
  var zhestArrayLastLast=[];
  var matrixHome=[];
  var matrixFrame=[];

  
  function getImg(){
    if(isAnimate) return;
    if(!home){
      homeCanvasContext.drawImage(video, 0, 0, widthVideo, heightVideo);
      //sleep(500);
      home=true;
      data = homeCanvasContext.getImageData(20, 20, widthVideo, heightVideo).data;
      hsvHome=colorsys.rgb_to_hsv({ r: data[0], g: data[1], b: data[2] });
      hsvHomeArray=[hsvHome[0].h,hsvHome[0].s,hsvHome[0].v];
      hsvArray.push(hsvHomeArray);
      for(i=0;i<widthVideo;i++){
        matrixHome[i]=[];
        for(j=0;j<heightVideo;j++){
          data = homeCanvasContext.getImageData(i, j, widthVideo, heightVideo).data;
          hsv=colorsys.rgb_to_hsv({ r: data[0], g: data[1], b: data[2] });
          matrixHome[i][j]=hsv[0].v;
        }
      }
    } else{

    }
    frameCanvasContext.drawImage(video, 0, 0, widthVideo, heightVideo);
    //sleep(500);
    var delta=0;
    var sumi=0;
    for(i=0;i<widthVideo;i++){
        matrixFrame[i]=[];
        weightArray[i]=0;
        for(j=0;j<heightVideo;j++){
          data = frameCanvasContext.getImageData(i, j, widthVideo, heightVideo).data;
          hsv=colorsys.rgb_to_hsv({ r: data[0], g: data[1], b: data[2] });
          matrixFrame[i][j]=hsv[0].v;
          weightArray[i]+=Math.abs(matrixFrame[i][j]/100-matrixHome[i][j]/100)*100;
         
          delta+=Math.abs(matrixFrame[i][j]/100-matrixHome[i][j]/100);
      }
      weightArray[i]/=heightVideo;
      if(weightArray[i]>20) zhestArray[i]=1;
      else zhestArray[i]=0;
      sumi+=zhestArray[i];
    }
    if(sumi>0)  $('.logs').html(zhestArray + '\r\n'  + $('.logs').html());
    delta=delta/widthVideo/heightVideo;

    var toRight=0;
    for(i=0;i<zoneCount;i++) 
      toRight+=zhestArray[i];

    var toLeft=0;
    for(i=widthVideo-1;i>widthVideo-zoneCount-1;i--) 
      toLeft+=zhestArray[i];    

    if(toLeft+toRight>0 && (toLeft>zoneWeight || toRight>zoneWeight)){
      $('.logs2').html(toLeft + "-" + toRight + "\r\n" + $('.logs2').html());

      if(toLeft>toRight){
        changePage(-1);
      }else{
        changePage(+1);
      }
    }

    data = frameCanvasContext.getImageData(20, 20, $("#frame")[0].width, $("#frame")[0].height).data;
    hsv=colorsys.rgb_to_hsv({ r: data[0], g: data[1], b: data[2] });
    hsvArray.push([hsv[0].h,hsv[0].s,hsv[0].v]);
    var deflection=(Math.abs(hsv[0].v-hsvHome[0].v)).toFixed(1);
    //$('.logs').html(hsvHome[0].h+' '+hsvHome[0].s+' '+hsvHome[0].v + ' | ' + hsv[0].h+' '+hsv[0].s+' '+hsv[0].v+" | " + deflection + "%\r\n" + $('.logs').html());
    dif=[];
    summ=[0,0,0];
    for(i=1;i<hsvArray.length;i++){
       dif.push([hsvArray[i][0]/360-hsvArray[0][0]/360,hsvArray[i][1]/100-hsvArray[0][1]/100,hsvArray[i][2]/100-hsvArray[0][2]/100]);
       //$('.logs').append(hsvArray[i][0]+"\r\n");
       summ[0]+=dif[i-1][0]*dif[i-1][0];
       summ[1]+=dif[i-1][1]*dif[i-1][1];
       summ[2]+=dif[i-1][2]*dif[i-1][2];
    }
    summ[0]=summ[2]/(hsvArray.length-1)*100;
    summ[1]=summ[2]/(hsvArray.length-1)*100;
    summ[2]=summ[2]/(hsvArray.length-1)*100;
    if(costil<50){
      //$('.logs').html('');
      costil++;
      home=false;
      hsvArray=[];
    }
    
    //$('.logs2').html(' disperse H='+summ[0]+'%\r\n disperse S='+summ[1]+'%\r\n disperse V='+summ[2]+'%');
  }
  

  var isAnimate=false;
  var pageNum=8;
  var currenPage=1;

  function changePage(direction){
    isAnimate=true;
   
    var page=currenPage+2*direction;
    $('.logs2').append('\r\n' + page + ' ' + currenPage + ' ' + direction);
    if(page<1) page=1;
    if(page>pageNum) page=pageNum;
    if(page!=currenPage){
      if(direction==1) {
        $('.logs2').append(' next');
        $('.screen').booklet('next');
        setTimeout(function(){isAnimate=false;},2000);
      }else{
        $('.logs2').append(' prev');
        $('.screen').booklet('prev');
        setTimeout(function(){isAnimate=false;},2000);
      }
      currenPage=page;
    }else   isAnimate=false;
  }
}catch(err){
  $('.logs3').html(err);
}
})

   
