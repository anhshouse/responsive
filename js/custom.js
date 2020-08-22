// JavaScript Document

$(document).ready(function(){
	
	
//MENU BUTTON TOGGLER

	$('.menu-toggler').on('click', function(){
        $("#side-menu").toggleClass('menu-hidden');
        $(".ham").toggleClass('active');
    });
	
	
	
//	---------MENU OPACITY-------
	
	if (window.matchMedia("(min-width: 768px)").matches) {
	
		$(window).scroll(function(){
			var cach_top = $(window).scrollTop();
			if(cach_top >= 30){
					$('.header').css({ paddingTop: '0px', height: '60px', background: 'rgba(204,204,204,0.5)', transition: 'all 0.3s'});
					$('#logo_png').css({ display: 'none', transition: 'all 0.3s'});
					$('#logo_textonly_png').css({ display: 'block', transition: 'all 0.3s'});
				}else{
					$('.header').css({ 	paddingTop: '40px', height: '100px', background: 'rgba(255,255,255,0)', transition: 'all 0.3s'});
					$('#logo_png').css({ display: 'block', transition: 'all 0.3s'});
					$('#logo_textonly_png').css({ display: 'none', transition: 'all 0.3s'});
			}
		});
	}
	
	else {
		$(window).scroll(function(){
			var cach_top = $(window).scrollTop();
			if(cach_top >= 30){
					$('.header').css({ paddingTop: '0px', height: '60px', background: 'rgba(204,204,204,0)', transition: 'all 0.3s'});
					$('#logo_png').css({ display: 'none', transition: 'all 0.3s'});
					$('#logo_textonly_png').css({ display: 'block', transition: 'all 0.3s'});
				}else{
					$('.header').css({ 	paddingTop: '0px', height: '60px', background: 'rgba(255,255,255,0)', transition: 'all 0.3s'});
					$('#logo_png').css({ display: 'block', transition: 'all 0.3s'});
					$('#logo_textonly_png').css({ display: 'none', transition: 'all 0.3s'});
			}
		});
	}
	
	
	
	
window.addEventListener('resize', function(){
	if (window.matchMedia("(min-width: 768px)").matches) {
	
		$(window).scroll(function(){
			var cach_top = $(window).scrollTop();
			if(cach_top >= 30){
					$('.header').css({ paddingTop: '0px', height: '60px', background: 'rgba(204,204,204,0.5)', transition: 'all 0.3s'});
					$('#logo_png').css({ display: 'none', transition: 'all 0.3s'});
					$('#logo_textonly_png').css({ display: 'block', transition: 'all 0.3s'});
				}else{
					$('.header').css({ 	paddingTop: '40px', height: '100px', background: 'rgba(255,255,255,0)', transition: 'all 0.3s'});
					$('#logo_png').css({ display: 'block', transition: 'all 0.3s'});
					$('#logo_textonly_png').css({ display: 'none', transition: 'all 0.3s'});
			}
		});
	}
	
	else {
		$(window).scroll(function(){
			var cach_top = $(window).scrollTop();
			if(cach_top >= 30){
					$('.header').css({ paddingTop: '0px', height: '60px', background: 'rgba(204,204,204,0)', transition: 'all 0.3s'});
					$('#logo_png').css({ display: 'none', transition: 'all 0.3s'});
					$('#logo_textonly_png').css({ display: 'block', transition: 'all 0.3s'});
				}else{
					$('.header').css({ 	paddingTop: '0px', height: '60px', background: 'rgba(255,255,255,0)', transition: 'all 0.3s'});
					$('#logo_png').css({ display: 'block', transition: 'all 0.3s'});
					$('#logo_textonly_png').css({ display: 'none', transition: 'all 0.3s'});
			}
		});
	}
	
})
	
	
	
	
	});