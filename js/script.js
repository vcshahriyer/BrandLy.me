$(document).ready(function(){
    
    $('.js--wp--1').waypoint(function(direction) {
        $('.js--line-1').addClass("animated rollIn");
        $('.js--h-1').addClass("animated zoomIn");
        $('.js--latest-products').addClass("animated fadeIn");
        if(direction=='down'){
                $('nav').addClass("sticky");
        }
        else{
                $('nav').removeClass("sticky");
        }
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
    
    $(".fakeloader").fakeLoader({
        timeToHide:1200, 

    // 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
    spinner:"spinner5",
    bgColor:"rgb(149, 6, 38)", //2ecc71
    // Custom loading GIF.
    //imagePath:"yourPath/customizedImage.gif" 

    });
    
    setTimeout(function(){
        $('.heroin-text').addClass("animated bounceIn");
    },1300)
    
    
});