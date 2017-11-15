var id=0;
var last=666;
var fs=require("fs");
$(function () {
  function change(){
    if(id==666){
      $('video').hide();
      document.getElementById('v0').currentTime = 0;
      last=666;
    }else if(id==0){
      
      $('video').hide();
      $('#v'+id).show();
      document.getElementById('v0').play();
    }else{
      if(last!=666) $('#v'+last).hide();
      $('#v'+id).show();
      $('.sync').prepend('show'+id);
      last=id;
    }
  }  
  function getSync(){
    var text = fs.readFileSync('../mapYK/sync', 'utf8');
    $('.sync').prepend(id+'\r\n');
    if(id!=text){
      id=parseInt(text);
      change();    
    } 
  }
  var intervall= setInterval(getSync,100);
});





















