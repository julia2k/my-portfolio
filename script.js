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
	
// close Button	
$('#welcome-button-close').hide().delay(2000).show('slide', {direction: 'right'}, 1000);
function closeWelcomePage(){
	$("#main-foto").hide("blind", {direction: 'up'}, 1000);
    $('#wrapper').css("display","block");
	
}

// active link color setup

function setLinkActive(elem){
   $("a.a-link").removeClass("a-link");
   $(elem).addClass('a-link'); 
}

function scrollAnimate(elem){
   var link_href=$(elem).attr("href");
   if ( link_href == "#my-works"){
     $("html").animate({ scrollTop: $(window).height() - $("nav").height()-50 }, "slow");
   } else if(link_href == "#hello-block"){
   	 $("html").animate({ scrollTop: $('#hello-block').offset().top -10 }, "slow");
   } else{
   	$("html").animate({ scrollTop: $('#social').offset().top -$(window).height()+10 }, "slow");
   }
}


$('a.nav-link').click(function () {
   setLinkActive(this);
   scrollAnimate(this);
});


//navigation links activation on scroll
$(document).on('scroll', function() {
	 var window_top = $(window).scrollTop();
	 var helloBlock_top = $('#hello-block').offset().top -10;
	 var myWorks_top = $('#my-works').offset().top -300;
	 var social_top = $('#social').offset().top -$(window).height()+10;
   
	 if (window_top > social_top) {
                setLinkActive($('a[href="#social"]'));
                }
	  else if (window_top > myWorks_top) {
                setLinkActive($('a[href="#my-works"]'));
                } else {
                 setLinkActive($('a[href="#hello-block"]'));
                }
});


