$(window).scroll(function(){
    if($(this).scrollTop() == 0){
        $('header nav').removeClass('shrink',1000);
        $('header nav').addClass('top',1000, "easeOutSine");
    }
    else {
        $('header nav').addClass('shrink',1000, "easeOutSine");
        $('header nav').removeClass('top',1000);
    }
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('#mainCarousel').carousel({
        interval: 5000
    });

    reoderSlides();
})

function reoderSlides()
{
    // slides reordering
    var slides = $(".carousel-item.partner-slide");
    if (slides.length == 0)
    {
        return;
    }

    var bannersReoderingOffset = $.cookie('banners-reodering-offset');
    if (!bannersReoderingOffset) {
        bannersReoderingOffset = 0;
    }

    // reorder banners
    for(var i=0; i<bannersReoderingOffset; i++)
    {
        $(slides[0]).insertAfter(slides[3]);
        slides = $(".carousel-item.partner-slide");
    }

    // SaveRaise and save new offset
    bannersReoderingOffset++;
    if (bannersReoderingOffset > 3) {
        bannersReoderingOffset = 0
    }

    $.cookie('banners-reodering-offset', bannersReoderingOffset);

}

// Sponsors carousel methods & events
$(document).ready(function(){
	$('.sponsors-carousel').carousel({
		interval: 3000,
		pause: "false"
	});
});

//Ticket counter
$(document).ready(function() {
    alert($('.sponsors-carousel').countdown);
    $('#days').countdown('2020/10/10', function(event) {
        $(this).html(event.strftime('%D days %H:%M:%S'));
    });
    // $("#days").CountDown("2019/02/11", function(event) {
    //     $('#days').text(event.strftime('%D days %H:%M:%S'));
    //     alert("A");
    //     // document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
    //     // document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
    //     // document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);
    // });
});