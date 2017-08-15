$(window).scroll(function(){

	var st = $(this).scrollTop();
	$(".header_text").css({
		"transform" : "translate(0%," + st + "%"
			});
	$(".text").css({
		"transform" : "translate(0%," + st + "%"
			});
		$(".section_2 img").css({
		"transform" : "translate(0%," + st /20+ "%"
			});
		$(".section_3 img").css({
		"transform" : "translate(0%," + st /20+ "%"
			});
});
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2500, 'swing', function () {
 window.location.hash = target;
 });
 });
