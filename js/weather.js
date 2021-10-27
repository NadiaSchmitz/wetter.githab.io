var weatherArray = [];
weatherArray = [
  {
    weatherOwner: "myWeather",
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
    var buttonId = $(this).attr('id');
    console.log(buttonId);
    for (var i = 0; i < weatherArray.length; i++) {
      if (buttonId == weatherArray[i].weatherOwner) {
        var styleId = i;
        $('#weather').removeClass().addClass(weatherArray[styleId].mainLayoutClass);
        $('#layout_1').removeClass().addClass(weatherArray[styleId].layout1);
        /*$('.sidebar_left').css('backgroundColor', colorSchemeArray[styleId].colorSidebarLeft);
        $('h4').css('backgroundColor', colorSchemeArray[styleId].colorTopic);*/
      }
    }
  });
})
