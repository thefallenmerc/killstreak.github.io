var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};



$(document).ready(function(){
	// if(!isMobile.any()) {
	// 		$.scrollify({
	// 		section: '.section',
	// 	    easing: "easeOutExpo",
	// 	    scrollSpeed: 300,
	// 	})
	// }

	$('.header').on('click','.nav-link', function(e){
		// let hash = 
		e.preventDefault();
		try { 
			let section = $(this).prop('href').split('#')[1];
			let scrollTo = $('#'+section).offset().top;
			$("html, body").animate({
				scrollTop : scrollTo
			},250);
		}
		catch {

		}
		if($(window).width()<=757) $('.navbar-collapse').collapse('hide');
	});

});