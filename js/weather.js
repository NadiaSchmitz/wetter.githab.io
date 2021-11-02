var weatherArray = [];
weatherArray = [{
    weatherOwner: "myWeather",
    controlButtonClass: "my_weather_control",
    temperaturUnderLimit: 22,
    temperaturStandart: 26,
    temperaturUpperLimit: 30,
    cloudsUnderLimit: 0,
    cloudsStandart: 0,
    cloudsUpperLimit: 1,
    rainUnderLimit: 0,
    rainStandart: 0,
    rainUpperLimit: 5,
    snowUnderLimit: 0,
    snowStandart: 0,
    snowUpperLimit: 0,
    windUnderLimit: 0,
    windStandart: 3,
    windUpperLimit: 5,
    mainLayoutClass: "main_layout_my_weather",
    layout1: "layout1_my_weather",
    layout2: "",
    layout3: ""
  },

  {
    weatherOwner: "nachbarnWeather",
    controlButtonClass: "nachbarn_weather_control",
    temperaturUnderLimit: 0,
    temperaturStandart: 5,
    temperaturUpperLimit: 9,
    cloudsUnderLimit: 6,
    cloudsStandart: 7,
    cloudsUpperLimit: 8,
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
    layout2: "",
    layout3: ""
  },

  {
    weatherOwner: "arbeitWeather",
    controlButtonClass: "arbeit_weather_control",
    temperaturUnderLimit: -30,
    temperaturStandart: -20,
    temperaturUpperLimit: -10,
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
    layout2: "layout2_arbeit_weather",
    layout3: "layout3_arbeit_weather"
  },
]

var messageArray = {
  0: 'Es ist zu kalt',
  1: 'Es ist zu warm',
  2: 'Es gibt schon keine Wolken',
  3: 'Es gibt zu wenig Wolken',
  4: 'Es ist zu bewölkt',
  5: 'Es regnet schon nicht',
  6: 'Es ist nur ein Paar Tropfen zulässig',
  7: 'Es regnet zu leicht',
  8: 'Es regnet zu stark',
  9: 'Der Regen ist nicht zulässig',
  10: 'Es gibt schon keinen Schnee',
  11: 'Es schneit zu leicht',
  12: 'Es schneit zu stark',
  13: 'Der Schnee ist nicht zulässig',
  14: 'Es gibt schon keinen Wind',
  15: 'Der Wind ist zu leicht',
  16: 'Der Wind ist zu stark',
  17: 'Es ist nur einen leichten Wind zulässig',
  18: 'Es ist keinen Wind zulässig'
}

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
  $(".control_button").click(function() {
    var activeButton = $('.active_button');
    var activeControlButton = $(this);

    /* Mein Wetter*/

    if (activeButton.hasClass('myWeather')) {
      if (activeControlButton.hasClass('temperature_minus') & activeControlButton.hasClass('my')) {
        var temperaturValue = +$('.temperature_value').html();
        if (temperaturValue > weatherArray[0].temperaturUnderLimit) {
          temperaturValue = temperaturValue - 1;
          $('.temperature_value').html(temperaturValue);
          var layoutOpacity = +$('#layout_1').css('opacity');
          $('#layout_1').css('opacity', layoutOpacity - 0.1);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[0]);
        }
      }

      if (activeControlButton.hasClass('temperature_plus') & activeControlButton.hasClass('my')) {
        var temperaturValue = +$('.temperature_value').html();
        if (temperaturValue < weatherArray[0].temperaturUpperLimit) {
          temperaturValue = temperaturValue + 1;
          $('.temperature_value').html(temperaturValue);
          var layoutOpacity = +$('#layout_1').css('opacity');
          $('#layout_1').css('opacity', layoutOpacity + 0.1);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[1]);
        }
      }

      if (activeControlButton.hasClass('clouds_minus') & activeControlButton.hasClass('my')) {
        var cloudsValue = +$('.clouds_value').html();
        if (cloudsValue > weatherArray[0].cloudsUnderLimit) {
          cloudsValue = cloudsValue - 1;
          $('.clouds_value').html(cloudsValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[2]);
        }
      }

      if (activeControlButton.hasClass('clouds_plus') & activeControlButton.hasClass('my')) {
        var cloudsValue = +$('.clouds_value').html();
        if (cloudsValue < weatherArray[0].cloudsUpperLimit) {
          cloudsValue = cloudsValue + 1;
          $('.clouds_value').html(cloudsValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[4]);
        }
      }

      if (activeControlButton.hasClass('rain_minus') & activeControlButton.hasClass('my')) {
        var rainValue = +$('.rain_value').html();
        if (rainValue > weatherArray[0].rainUnderLimit) {
          rainValue = rainValue - 1;
          $('.rain_value').html(rainValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[5]);
        }
      }

      if (activeControlButton.hasClass('rain_plus') & activeControlButton.hasClass('my')) {
        var rainValue = +$('.rain_value').html();
        if (rainValue < weatherArray[0].rainUpperLimit) {
          rainValue = rainValue + 1;
          $('.rain_value').html(rainValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[6]);
        }
      }

      if (activeControlButton.hasClass('snow_minus') & activeControlButton.hasClass('my')) {
        var snowValue = +$('.snow_value').html();
        if (snowValue > weatherArray[0].snowUnderLimit) {
          snowValue = snowValue - 1;
          $('.snow_value').html(snowValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[10]);
        }
      }

      if (activeControlButton.hasClass('snow_plus') & activeControlButton.hasClass('my')) {
        var snowValue = +$('.snow_value').html();
        if (snowValue < weatherArray[0].snowUpperLimit) {
          snowValue = snowValue + 1;
          $('.snow_value').html(snowValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[13]);
        }
      }

      if (activeControlButton.hasClass('wind_minus') & activeControlButton.hasClass('my')) {
        var windValue = +$('.wind_value').html();
        console.log(windValue)
        if (windValue > weatherArray[0].windUnderLimit) {
          windValue = windValue - 1;
          $('.wind_value').html(windValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[14]);
        }
      }

      if (activeControlButton.hasClass('wind_plus') & activeControlButton.hasClass('my')) {
        var windValue = +$('.wind_value').html();
        if (windValue < weatherArray[0].windUpperLimit) {
          windValue = windValue + 1;
          $('.wind_value').html(windValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[17]);
        }
      }
    }

    /*Das Wetter von Nachbarn*/

    if (activeButton.hasClass('nachbarnWeather')) {
      if (activeControlButton.hasClass('temperature_minus') & activeControlButton.hasClass('nachbarn')) {
        var temperaturValue = +$('.temperature_value').html();
        if (temperaturValue > weatherArray[1].temperaturUnderLimit) {
          temperaturValue = temperaturValue - 1;
          $('.temperature_value').html(temperaturValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[0]);
        }
      }

      if (activeControlButton.hasClass('temperature_plus') & activeControlButton.hasClass('nachbarn')) {
        var temperaturValue = +$('.temperature_value').html();
        if (temperaturValue < weatherArray[1].temperaturUpperLimit) {
          temperaturValue = temperaturValue + 1;
          $('.temperature_value').html(temperaturValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[1]);
        }
      }

      if (activeControlButton.hasClass('clouds_minus') & activeControlButton.hasClass('nachbarn')) {
        var cloudsValue = +$('.clouds_value').html();
        if (cloudsValue > weatherArray[1].cloudsUnderLimit) {
          cloudsValue = cloudsValue - 1;
          $('.clouds_value').html(cloudsValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[3]);
        }
      }

      if (activeControlButton.hasClass('clouds_plus') & activeControlButton.hasClass('nachbarn')) {
        var cloudsValue = +$('.clouds_value').html();
        if (cloudsValue < weatherArray[1].cloudsUpperLimit) {
          cloudsValue = cloudsValue + 1;
          $('.clouds_value').html(cloudsValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[4]);
        }
      }

      if (activeControlButton.hasClass('rain_minus') & activeControlButton.hasClass('nachbarn')) {
        var rainValue = +$('.rain_value').html();
        if (rainValue > weatherArray[1].rainUnderLimit) {
          rainValue = rainValue - 2;
          $('.rain_value').html(rainValue);
          var layoutOpacity = +$('#layout_1').css('opacity');
          $('#layout_1').css('opacity', layoutOpacity - 0.1);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[7]);
        }
      }

      if (activeControlButton.hasClass('rain_plus') & activeControlButton.hasClass('nachbarn')) {
        var rainValue = +$('.rain_value').html();
        if (rainValue < weatherArray[1].rainUpperLimit) {
          rainValue = rainValue + 2;
          $('.rain_value').html(rainValue);
          var layoutOpacity = +$('#layout_1').css('opacity');
          $('#layout_1').css('opacity', layoutOpacity + 0.1);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[8]);
        }
      }

      if (activeControlButton.hasClass('snow_minus') & activeControlButton.hasClass('nachbarn')) {
        var snowValue = +$('.snow_value').html();
        if (snowValue > weatherArray[1].snowUnderLimit) {
          snowValue = snowValue - 1;
          $('.snow_value').html(snowValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[10]);
        }
      }

      if (activeControlButton.hasClass('snow_plus') & activeControlButton.hasClass('nachbarn')) {
        var snowValue = +$('.snow_value').html();
        if (snowValue < weatherArray[1].snowUpperLimit) {
          snowValue = snowValue + 1;
          $('.snow_value').html(snowValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[13]);
        }
      }

      if (activeControlButton.hasClass('wind_minus') & activeControlButton.hasClass('nachbarn')) {
        var windValue = +$('.wind_value').html();
        console.log(windValue)
        if (windValue > weatherArray[1].windUnderLimit) {
          windValue = windValue - 1;
          $('.wind_value').html(windValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[15]);
        }
      }

      if (activeControlButton.hasClass('wind_plus') & activeControlButton.hasClass('nachbarn')) {
        var windValue = +$('.wind_value').html();
        if (windValue < weatherArray[1].windUpperLimit) {
          windValue = windValue + 1;
          $('.wind_value').html(windValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[16]);
        }
      }
    }

    /*Das Wetter bei der Arbeit*/

    if (activeButton.hasClass('arbeitWeather')) {
      if (activeControlButton.hasClass('temperature_minus') & activeControlButton.hasClass('arbeit')) {
        var temperaturValue = +$('.temperature_value').html();
        if (temperaturValue > weatherArray[2].temperaturUnderLimit) {
          temperaturValue = temperaturValue - 1;
          $('.temperature_value').html(temperaturValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[0]);
        }
      }

      if (activeControlButton.hasClass('temperature_plus') & activeControlButton.hasClass('arbeit')) {
        var temperaturValue = +$('.temperature_value').html();
        if (temperaturValue < weatherArray[2].temperaturUpperLimit) {
          temperaturValue = temperaturValue + 1;
          $('.temperature_value').html(temperaturValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[1]);
        }
      }

      if (activeControlButton.hasClass('clouds_minus') & activeControlButton.hasClass('arbeit')) {
        var cloudsValue = +$('.clouds_value').html();
        if (cloudsValue > weatherArray[2].cloudsUnderLimit) {
          cloudsValue = cloudsValue - 1;
          $('.clouds_value').html(cloudsValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[3]);
        }
      }

      if (activeControlButton.hasClass('clouds_plus') & activeControlButton.hasClass('arbeit')) {
        var cloudsValue = +$('.clouds_value').html();
        if (cloudsValue < weatherArray[2].cloudsUpperLimit) {
          cloudsValue = cloudsValue + 1;
          $('.clouds_value').html(cloudsValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[4]);
        }
      }

      if (activeControlButton.hasClass('rain_minus') & activeControlButton.hasClass('arbeit')) {
        var rainValue = +$('.rain_value').html();
        if (rainValue > weatherArray[2].rainUnderLimit) {
          rainValue = rainValue - 1;
          $('.rain_value').html(rainValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[5]);
        }
      }

      if (activeControlButton.hasClass('rain_plus') & activeControlButton.hasClass('arbeit')) {
        var rainValue = +$('.rain_value').html();
        if (rainValue < weatherArray[2].rainUpperLimit) {
          rainValue = rainValue + 1;
          $('.rain_value').html(rainValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[9]);
        }
      }

      if (activeControlButton.hasClass('snow_minus') & activeControlButton.hasClass('arbeit')) {
        var snowValue = +$('.snow_value').html();
        if (snowValue > weatherArray[2].snowUnderLimit) {
          snowValue = snowValue - 3;
          $('.snow_value').html(snowValue);
          var layoutOpacity = +$('#layout_1').css('opacity');
          $('#layout_1').css('opacity', layoutOpacity - 0.1);
          if (snowValue < (weatherArray[2].snowUpperLimit - 20)) {
            $('#layout_2').css('display', 'none');
          }
          if (snowValue < (weatherArray[2].snowUpperLimit - 10)) {
            $('#layout_3').css('display', 'none');
          }
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[10]);
        }
      }

      if (activeControlButton.hasClass('snow_plus') & activeControlButton.hasClass('arbeit')) {
        var snowValue = +$('.snow_value').html();
        if (snowValue < weatherArray[2].snowUpperLimit) {
          snowValue = snowValue + 5;
          $('.snow_value').html(snowValue);
          var layoutOpacity = +$('#layout_1').css('opacity');
          $('#layout_1').css('opacity', layoutOpacity + 0.1);
          if (snowValue >= (weatherArray[2].snowUpperLimit - 20)) {
            $('#layout_2').css('display', 'block');
          }
          if (snowValue >= (weatherArray[2].snowUpperLimit - 10)) {
            $('#layout_3').css('display', 'block');
          }
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[12]);
        }
      }

      if (activeControlButton.hasClass('wind_minus') & activeControlButton.hasClass('arbeit')) {
        var windValue = +$('.wind_value').html();
        console.log(windValue)
        if (windValue > weatherArray[2].windUnderLimit) {
          windValue = windValue - 1;
          $('.wind_value').html(windValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[14]);
        }
      }

      if (activeControlButton.hasClass('wind_plus') & activeControlButton.hasClass('arbeit')) {
        var windValue = +$('.wind_value').html();
        if (windValue < weatherArray[2].windUpperLimit) {
          windValue = windValue + 1;
          $('.wind_value').html(windValue);
        }
        else {
          PopUpShow();
          $('.popup_text').html(messageArray[18]);
        }
      }
    }

  });
})
