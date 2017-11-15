
function keyfunc(e){
	if(e.keyCode==112) {
		window.close();
	}
}
addEventListener("keydown",keyfunc);
//0-rus,1-en,2-ch,3-de
var text=[];
text[0]=['Относится к "недозрелым" ископаемым смолам. Возраст - от нескольких сотен лет и старше, не содержит янтарной кислоты.<br>Для диагностики достаточно потереть поверхность ватой, смоченной в эфире. На копале, в отличие от янтаря, образуется пятно.','От природного янтаря можно отличить двумя способами:<br>- если поверхность прессованного янтаря сильно тереть кусочком ткани, смоченным в эфире, то она становится липкой.<br>- в прессованном янтаре можно наблюдать под лупой структуры течения, шарики плотной основной массы, небольшие сгустки красителя. ','-Имитации из стекла отличаются гораздо более высокими значениями плотности (более 2 г/см3) и твердости (5). <br>-Нож не оставляет на стекле царапин. ','Внешне отличить качественную подделку от янтаря практически невозможно. <br>-Имитации из полимеров легко выявляются прикладыванием к поверхности раскаленной докрасна иглы.При этом ощущается неприятный химический запах. <br>-Если поскрести по поверхности образца острым ножом, янтарь дает крошку, а полимер - стружку.'];
text[1]=['Survey site of the worlds only Primorsky amber deposit opens a beautiful panorama, representing the amber quarry from a height of 50 meters, where amber is extracted industrially.','text2','text3','text4'];
text[2]=['树脂指的是不成熟的化石树脂。 年龄是几百年的历史。 不包含丁二酸。诊断树脂触及表面的棉泡在醚。 不同的琥珀色的表面上的元素出现。挖 指的是不成熟的化石树脂。 年龄是几百年的历史。 不包含丁二酸。 诊断挖擦过面棉泡在醚。 不同的琥珀色的表面上的项目就会出现。','text2','text3','text4'];
text[3]=['Umfrage Internet-Seiten der nur Primorski amber Lagerstätte der Welt öffnet sich ein wunderschönes Panorama, die den Bernstein Steinbruch aus einer Höhe von 50 Metern, wo Bernstein industriell gewonnen wird.','text2','text3','text4'];
title=[]
title[0]=['Копал','Прессованный янтарь','Стекло','Полимер'];
title[1]=['Копал','Прессованный янтарь','Стекло','Полимер'];
title[2]=['Копал','Прессованный янтарь','Стекло','Полимер'];
title[3]=['Копал','Прессованный янтарь','Стекло','Полимер'];
var lang=0;
var id=0;
console.log(lang + ' ' + id);
$(function () {
	$('.preview,.preview-dop').click(function(){
		
		id=parseInt($(this).attr('data-id'))-1;
		$('.center-frame .imgi').html('<img src="images/'+(id+1)+'.png">');
		$('.center-frame .text').html(text[lang][id]);
		$('.center-frame .title').html(title[lang][id]);
		console.log(lang + ' ' + id);
	});
	$('.lang').click(function(){

		lang=parseInt($(this).attr('data-id'))-1;
		$('.center-frame .text').html(text[lang][id]);
		$('.lang-active').removeClass('lang-active');
		$('.center-frame .title').html(title[lang][id]);
		$(this).addClass('lang-active');

	})
	$('#p1').click();
});
