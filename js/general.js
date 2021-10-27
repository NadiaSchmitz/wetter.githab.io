$(document).ready(function() {
    var widthScreen = $(window).width() - 700;
    var heightScreen = widthScreen / 1.5;
    
    var screenRatio = widthScreen / heightScreen;
    
    console.log(widthScreen);
    console.log(heightScreen);
    console.log(screenRatio);
    
    $(".weather").css("width", widthScreen);
    $(".weather").css("height", heightScreen);
})