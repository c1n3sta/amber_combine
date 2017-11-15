
$(function () {
var fs=require("fs");
  var id=1;
  var last=1;
  function change(){
    $('#i'+last).fadeOut(500,function(){
      last=id;
      $('#i'+last).fadeIn(500);
    });
  }
  change(); 
  function getSync(){
    var text = fs.readFileSync('test', 'utf8');
    id=parseInt(text);

    change();
  }
  var intervall= setInterval(getSync,100);
  change();
});