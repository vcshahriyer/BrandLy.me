$(document).ready(function () {
    
//    MY custom preloader //

    var svg = new Walkway({
        selector: "#Layer_1",
        duration: 4000,
        easing: 'easeInOutCubic'
    }).draw();

    $('#svg-img').fadeIn(100);
    $('#my-div').delay(4000).fadeOut(500);

    //    waypoint animation //
    
    $('.js--wp--1').waypoint(function (direction) {
        $('.js--line-1').addClass("animated rollIn");
        $('.js--h-1').addClass("animated zoomIn");
        $('.js--latest-products').addClass("animated fadeIn");
        if (direction == 'down'){
                $('nav').addClass("sticky");
        }
        else{
                $('nav').removeClass("sticky");
        }
    }, {
        offset: '50%'
    });
    
    $('.js--wp--2').waypoint(function (direction) {
        $('.js--line-2').addClass("animated rollIn");
        $('.js--h-2').addClass("animated zoomIn");
        $('.js--trending').addClass("animated fadeIn");
    }, {
        offset: '50%'
    });
    
    $('.js--wp--3').waypoint(function (direction) {
        $('.js--line-3').addClass("animated rollIn");
        $('.js--h-3').addClass("animated zoomIn");
    }, {
        offset: '50%'
    });
    
    $('.js--wp--4').waypoint(function (direction) {
        $('.js--left').addClass("animated slideInLeft");
        $('.js--right').addClass("animated slideInRight");
    }, {
        offset: '50%'
    });
    
    $('.js--wp--5').waypoint(function (direction) {
        $('.js--letter-left').addClass("animated slideInLeft");
        $('.js--letter-right').addClass("animated slideInRight");
        $('.js--heart').addClass("animated flash");
    }, {
        offset: '0%'
    });
    
    
//    mobele navigation section   //
    
        $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.animate({width:'toggle'},500);
        
        if (icon.hasClass('ion-ios-more')) {
            icon.addClass('ion-close-circled');
            icon.removeClass('ion-ios-more');
        } else {
            icon.addClass('ion-ios-more');
            icon.removeClass('ion-close-circled');
        }        
    });
    
    
    
});
