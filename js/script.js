$(document).ready(function(){
    
    $('.js--wp--1').waypoint(function(direction) {
        $('.js--line-1').addClass("animated rollIn");
        $('.js--h-1').addClass("animated zoomIn");
        $('.js--latest-products').addClass("animated fadeIn");
    }, {
        offset: '50%'
    });
    
    $('.js--wp--2').waypoint(function(direction) {
        $('.js--line-2').addClass("animated rollIn");
        $('.js--h-2').addClass("animated zoomIn");
        $('.js--trending').addClass("animated fadeIn");
    }, {
        offset: '50%'
    });
    
    $('.js--wp--3').waypoint(function(direction) {
        $('.js--line-3').addClass("animated rollIn");
        $('.js--h-3').addClass("animated zoomIn");
    }, {
        offset: '50%'
    });
    
    $('.js--wp--4').waypoint(function(direction) {
        $('.js--left').addClass("animated slideInLeft");
        $('.js--right').addClass("animated slideInRight");
    }, {
        offset: '50%'
    });
    
    $('.js--wp--5').waypoint(function(direction) {
        $('.js--letter-left').addClass("animated slideInLeft");
        $('.js--letter-right').addClass("animated slideInRight");
        $('.js--heart').addClass("animated flash");
    }, {
        offset: '0%'
    });
});