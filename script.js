$(document).ready(function() {
    $('#welcome-animation').css("display","block");

});
var text = $("#welcome-text").text();
var chars= text.split("");
 $("#welcome-text").empty();

chars.forEach(function (char){
	if (char==" "){
	    $("#welcome-text").append("<div class='split-char w40px'>" + char);	
	}
	else{
		$("#welcome-text").append("<div class='split-char'>" + char);	
	}
 });
//var split = $("#welcome-text");
var splitChar=$(".split-char");

function random(min, max){
	return (Math.random() * (max - min)) + min;
}

splitChar.each(function(i){
	TweenMax.from($(this), 2.0, {
		opacity: 0,
		x: random(-300, 1000),
		y: random(-300, 1000),
		z: random(-300, 1000),
		scale: .1,
		delay: i * .02,
		yoyo: true,
		repeat: 0,
		// repeatDelay: 1000
	});
});
	
$('#welcome-button-close').hide().delay(2000).show('slide', {direction: 'right'}, 1000);


function closeWelcomePage(){
	$("#main-foto").hide("blind", {direction: 'up'}, 1000);
    $('#wrapper').css("display","block");
	
}
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})