
fs=require("fs")
fs.writeFileSync("sync", "1",  "utf8");
var gui = require('nw.gui');
var mainWindow=gui.Window.get();
mainWindow.moveTo(1920,0);
var dopWindow=gui.Window.get(window.open('mapYK-map/index.html',"map","width=1920,height=1080,focus=false"));
dopWindow.moveTo(-1920,-40);
function keyfunc(e){
	if(e.keyCode==112) {
		mainWindow.close();
		dopWindow.close();
	}
}
addEventListener("keydown",keyfunc);
//0-rus,1-en,2-ch,3-de
var text=[];
text[0]=['Обзорная площадка единственного в мире Приморского месторождения янтаря открываеткрасивую панораму, предсталвяя янтарный карьер с высоты 50 метров, где промышленным способом добывают янтарь.','Текст2','Текст3','Текст4','Текст5','Текст6','Текст7','Текст8'];
text[1]=['Survey site of the worlds only Primorsky amber deposit opens a beautiful panorama, representing the amber quarry from a height of 50 meters, where amber is extracted industrially.','text2','text3','text4','text5','text6','text7','text8'];
text[2]=['世界上唯一的滨海琥珀矿床的调查网站打开一个美丽的全景，较50米的高度，在琥珀中提取工业琥珀采石场。','text2','text3','text4','text5','text6','text7','text8'];
text[3]=['Umfrage Internet-Seiten der nur Primorski amber Lagerstätte der Welt öffnet sich ein wunderschönes Panorama, die den Bernstein Steinbruch aus einer Höhe von 50 Metern, wo Bernstein industriell gewonnen wird.','text2','text3','text4','text5','text6','text7','text8'];
lang=0;
id=0;
$(function () {
	$('.preview,.preview-dop').click(function(){
		id=parseInt($(this).attr('data-id'))-1;
		fs.writeFileSync("sync", id+1,  "utf8");
		$('.center-frame .imgi').html('<img src="images/b'+(id+1)+'.jpg">');
		$('.center-frame .text').html(text[lang][id]);
	});
	$('.lang').click(function(){
		lang=parseInt($(this).attr('data-id'))-1;
		$('.center-frame .text').html(text[lang][id]);
		$('.lang-active').removeClass('lang-active');
		$(this).addClass('lang-active');
	})
	$('#p1').click();
});
