$('.nav').addClass('fechada');
	$('.nav').after('<div class="center"><a href="#home"><img src="images/logo-phenomenalsoccercamp.svg" alt="Phenomenal Soccer Camp" class="logo"></a><a class="nav-toggle">MENU</a></div>');

	$('.nav-toggle').click(function() {
		var altura = $('.nav ul').height();
		if($('.nav').hasClass('fechada')) {
			$('.nav').animate({height:altura},{queue:false, duration:200}).removeClass('fechada');
		}
		else {
			$('.nav').animate({height:'0px'},{queue:false, duration:200}).addClass('fechada');
		}
	});

    $('.listaNav>li').click(function() {
        if($('.nav').hasClass('fechada')) {

        } else {
            $('.nav').animate({height:'0px'},{queue:false, duration:200}).addClass('fechada');
        }
	});

	$(window).resize(function() {
		var tamanhoViewport = $(window).width();
		if (tamanhoViewport > 780) {
			$('.nav').css('height','auto').addClass('fechada');
		} else {
			$('.nav').css('height','0px').addClass('fechada');
		}
	});
