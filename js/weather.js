var weatherArray = [];
weatherArray = [{
    weatherOwner: "myWeather",
    controlButtonClass: "my_weather_control",
    temperaturUnderLimit: 25,
    temperaturStandart: 26,
    temperaturUpperLimit: 27,
    cloudsUnderLimit: 0,
    cloudsStandart: 0,
    cloudsUpperLimit: 1,
    rainUnderLimit: 0,
    rainStandart: 0,
    rainUpperLimit: 5,
    snowUnderLimit: 0,
    snowStandart: 0,
    snowUpperLimit: 0,
    windUnderLimit: 3,
    windStandart: 3,
    windUpperLimit: 5,
    mainLayoutClass: "main_layout_my_weather",
    layout1: "layout1_my_weather",
    layout2: ""
  },

  {
    weatherOwner: "nachbarnWeather",
    controlButtonClass: "nachbarn_weather_control",
    temperaturUnderLimit: 3,
    temperaturStandart: 5,
    temperaturUpperLimit: 8,
    cloudsUnderLimit: 7,
    cloudsStandart: 8,
    cloudsUpperLimit: 9,
    rainUnderLimit: 80,
    rainStandart: 90,
    rainUpperLimit: 100,
    snowUnderLimit: 0,
    snowStandart: 0,
    snowUpperLimit: 0,
    windUnderLimit: 20,
    windStandart: 30,
    windUpperLimit: 40,
    mainLayoutClass: "main_layout_nachbarn_weather",
    layout1: "layout1_nachbarn_weather",
    layout2: ""
  },

  {
    weatherOwner: "arbeitWeather",
    controlButtonClass: "arbeit_weather_control",
    temperaturUnderLimit: -10,
    temperaturStandart: -20,
    temperaturUpperLimit: -30,
    cloudsUnderLimit: 3,
    cloudsStandart: 4,
    cloudsUpperLimit: 5,
    rainUnderLimit: 0,
    rainStandart: 0,
    rainUpperLimit: 0,
    snowUnderLimit: 30,
    snowStandart: 50,
    snowUpperLimit: 80,
    windUnderLimit: 0,
    windStandart: 0,
    windUpperLimit: 0,
    mainLayoutClass: "main_layout_arbeit_weather",
    layout1: "layout1_arbeit_weather",
    layout2: ""
  },
]

$(document).ready(function() {
  $(".weather_button").click(function() {
    $('.weather_button').removeClass('active_button');
    $(this).addClass('active_button');
    $('.control_button').removeClass('active_control_button');
    var activeAttr = $('.active_button').attr('data-info');
    console.log(activeAttr)
    $('.control_button').each(function() {
      if ($(this).hasClass(activeAttr)) {
        $(this).addClass('active_control_button')
      }
    });

    var buttonId = $(this).attr('id');

    for (var i = 0; i < weatherArray.length; i++) {
      if (buttonId == weatherArray[i].weatherOwner) {
        var styleId = i;
        $(buttonId).addClass('active_button');
        $('#weather').removeClass().addClass(weatherArray[styleId].mainLayoutClass);
        $('#layout_1').removeClass().addClass(weatherArray[styleId].layout1);
        $('.temperature_value').html(weatherArray[styleId].temperaturStandart);
        $('.clouds_value').html(weatherArray[styleId].cloudsStandart);
        $('.rain_value').html(weatherArray[styleId].rainStandart);
        $('.snow_value').html(weatherArray[styleId].snowStandart);
        $('.wind_value').html(weatherArray[styleId].windStandart);
      }
    }
  });
})

$(document).ready(function() {
  $(".active_control_button").click(function() {
    var activeButton = $('.active_button');
    var activeControlButton = $(this);
    
    if ($('.active_button').hasClass('myWeather')) {
      if (activeControlButton.hasClass('temperature_minus')) {
        var temperaturValue = $('.temperature_value').html();
        temperaturValue = temperaturValue - 1;
        $('.temperature_value').html(temperaturValue);
        console.log(temperaturValue)
      }
      
      if (activeControlButton.hasClass('temperature_plus')) {
        var temperaturValue = $('.temperature_value').html();
        temperaturValue = +temperaturValue + 1;
        $('.temperature_value').html(temperaturValue);
        console.log(temperaturValue)
      }
      
      if (activeControlButton.hasClass('clouds_minus')) {
        var cloudsValue = $('.clouds_value').html();
        cloudsValue = cloudsValue - 1;
        $('.clouds_value').html(cloudsValue);
        console.log(temperaturValue)
      }
      
      if (activeControlButton.hasClass('clouds_plus')) {
        var cloudsValue = $('.clouds_value').html();
        cloudsValue = +cloudsValue + 1;
        $('.clouds_value').html(cloudsValue);
        console.log(temperaturValue)
      }
    } 
    else if ($('.active_button').hasClass('nachbarn')) {
      
    }
    else {
      
    }

  });
})
