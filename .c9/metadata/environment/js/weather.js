{"filter":false,"title":"weather.js","tooltip":"/js/weather.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":54,"column":21},"end":{"row":54,"column":22},"action":"remove","lines":["0"],"id":216},{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"remove","lines":["8"]}],[{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"insert","lines":["6"],"id":217}],[{"start":{"row":55,"column":19},"end":{"row":55,"column":20},"action":"remove","lines":["0"],"id":218},{"start":{"row":55,"column":18},"end":{"row":55,"column":19},"action":"remove","lines":["9"]}],[{"start":{"row":55,"column":18},"end":{"row":55,"column":19},"action":"insert","lines":["0"],"id":219}],[{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"remove","lines":["6"],"id":220}],[{"start":{"row":54,"column":20},"end":{"row":54,"column":21},"action":"insert","lines":["0"],"id":221}],[{"start":{"row":56,"column":22},"end":{"row":56,"column":23},"action":"remove","lines":["0"],"id":222},{"start":{"row":56,"column":21},"end":{"row":56,"column":22},"action":"remove","lines":["0"]},{"start":{"row":56,"column":20},"end":{"row":56,"column":21},"action":"remove","lines":["1"]}],[{"start":{"row":56,"column":20},"end":{"row":56,"column":21},"action":"insert","lines":["0"],"id":223}],[{"start":{"row":57,"column":20},"end":{"row":57,"column":21},"action":"remove","lines":["0"],"id":224}],[{"start":{"row":57,"column":20},"end":{"row":57,"column":21},"action":"insert","lines":["3"],"id":225},{"start":{"row":57,"column":21},"end":{"row":57,"column":22},"action":"insert","lines":["0"]}],[{"start":{"row":58,"column":18},"end":{"row":58,"column":19},"action":"remove","lines":["0"],"id":226}],[{"start":{"row":58,"column":18},"end":{"row":58,"column":19},"action":"insert","lines":["5"],"id":227},{"start":{"row":58,"column":19},"end":{"row":58,"column":20},"action":"insert","lines":["0"]}],[{"start":{"row":59,"column":20},"end":{"row":59,"column":21},"action":"remove","lines":["0"],"id":228}],[{"start":{"row":59,"column":20},"end":{"row":59,"column":21},"action":"insert","lines":["8"],"id":229},{"start":{"row":59,"column":21},"end":{"row":59,"column":22},"action":"insert","lines":["0"]}],[{"start":{"row":60,"column":21},"end":{"row":60,"column":22},"action":"remove","lines":["0"],"id":230}],[{"start":{"row":60,"column":21},"end":{"row":60,"column":22},"action":"insert","lines":["0"],"id":231}],[{"start":{"row":60,"column":21},"end":{"row":60,"column":22},"action":"remove","lines":["0"],"id":232},{"start":{"row":60,"column":20},"end":{"row":60,"column":21},"action":"remove","lines":["2"]}],[{"start":{"row":60,"column":20},"end":{"row":60,"column":21},"action":"insert","lines":["0"],"id":233}],[{"start":{"row":61,"column":19},"end":{"row":61,"column":20},"action":"remove","lines":["0"],"id":234},{"start":{"row":61,"column":18},"end":{"row":61,"column":19},"action":"remove","lines":["3"]}],[{"start":{"row":61,"column":18},"end":{"row":61,"column":19},"action":"insert","lines":["0"],"id":235}],[{"start":{"row":62,"column":21},"end":{"row":62,"column":22},"action":"remove","lines":["0"],"id":236},{"start":{"row":62,"column":20},"end":{"row":62,"column":21},"action":"remove","lines":["4"]}],[{"start":{"row":62,"column":20},"end":{"row":62,"column":21},"action":"insert","lines":["0"],"id":237}],[{"start":{"row":67,"column":1},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":238},{"start":{"row":68,"column":0},"end":{"row":69,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":69,"column":0},"end":{"row":83,"column":4},"action":"insert","lines":["$(document).ready(function() {","  $(\".color_schema_button\").click(function() {","    var buttonId = $(this).attr('id');","    for (var i = 0; i < colorSchemeArray.length; i++) {","      if (buttonId == colorSchemeArray[i].schemeName) {","        var styleId = i;","        $('.header').css('backgroundColor', colorSchemeArray[styleId].colorHeader);","        $('.sidebar_left').css('backgroundColor', colorSchemeArray[styleId].colorSidebarLeft);","        $('h4').css('backgroundColor', colorSchemeArray[styleId].colorTopic);","      }","    }","  });","})","© 2021 GitHub, Inc.","Term"],"id":239}],[{"start":{"row":83,"column":3},"end":{"row":83,"column":4},"action":"remove","lines":["m"],"id":240},{"start":{"row":83,"column":2},"end":{"row":83,"column":3},"action":"remove","lines":["r"]},{"start":{"row":83,"column":1},"end":{"row":83,"column":2},"action":"remove","lines":["e"]},{"start":{"row":83,"column":0},"end":{"row":83,"column":1},"action":"remove","lines":["T"]},{"start":{"row":82,"column":19},"end":{"row":83,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":82,"column":0},"end":{"row":82,"column":19},"action":"remove","lines":["© 2021 GitHub, Inc."],"id":241}],[{"start":{"row":81,"column":2},"end":{"row":81,"column":4},"action":"insert","lines":["*/"],"id":242},{"start":{"row":69,"column":0},"end":{"row":69,"column":2},"action":"insert","lines":["/*"]}],[{"start":{"row":81,"column":2},"end":{"row":81,"column":4},"action":"remove","lines":["*/"],"id":243},{"start":{"row":69,"column":0},"end":{"row":69,"column":2},"action":"remove","lines":["/*"]}],[{"start":{"row":70,"column":6},"end":{"row":70,"column":25},"action":"remove","lines":["color_schema_button"],"id":244},{"start":{"row":70,"column":6},"end":{"row":70,"column":20},"action":"insert","lines":["weather_button"]}],[{"start":{"row":79,"column":5},"end":{"row":79,"column":7},"action":"insert","lines":["*/"],"id":245},{"start":{"row":72,"column":4},"end":{"row":72,"column":6},"action":"insert","lines":["/*"]}],[{"start":{"row":71,"column":38},"end":{"row":72,"column":0},"action":"insert","lines":["",""],"id":246},{"start":{"row":72,"column":0},"end":{"row":72,"column":4},"action":"insert","lines":["    "]},{"start":{"row":72,"column":4},"end":{"row":72,"column":5},"action":"insert","lines":["c"]},{"start":{"row":72,"column":5},"end":{"row":72,"column":6},"action":"insert","lines":["o"]},{"start":{"row":72,"column":6},"end":{"row":72,"column":7},"action":"insert","lines":["n"]}],[{"start":{"row":72,"column":4},"end":{"row":72,"column":7},"action":"remove","lines":["con"],"id":247},{"start":{"row":72,"column":4},"end":{"row":72,"column":11},"action":"insert","lines":["console"]}],[{"start":{"row":72,"column":11},"end":{"row":72,"column":12},"action":"insert","lines":["."],"id":248},{"start":{"row":72,"column":12},"end":{"row":72,"column":13},"action":"insert","lines":["l"]},{"start":{"row":72,"column":13},"end":{"row":72,"column":14},"action":"insert","lines":["o"]}],[{"start":{"row":72,"column":12},"end":{"row":72,"column":14},"action":"remove","lines":["lo"],"id":249},{"start":{"row":72,"column":12},"end":{"row":72,"column":17},"action":"insert","lines":["log()"]}],[{"start":{"row":72,"column":16},"end":{"row":72,"column":17},"action":"insert","lines":["b"],"id":250},{"start":{"row":72,"column":17},"end":{"row":72,"column":18},"action":"insert","lines":["u"]},{"start":{"row":72,"column":18},"end":{"row":72,"column":19},"action":"insert","lines":["t"]},{"start":{"row":72,"column":19},"end":{"row":72,"column":20},"action":"insert","lines":["t"]}],[{"start":{"row":72,"column":16},"end":{"row":72,"column":20},"action":"remove","lines":["butt"],"id":251},{"start":{"row":72,"column":16},"end":{"row":72,"column":24},"action":"insert","lines":["buttonId"]}],[{"start":{"row":72,"column":25},"end":{"row":72,"column":26},"action":"insert","lines":[";"],"id":252}],[{"start":{"row":80,"column":5},"end":{"row":80,"column":7},"action":"remove","lines":["*/"],"id":253},{"start":{"row":73,"column":4},"end":{"row":73,"column":6},"action":"remove","lines":["/*"]}],[{"start":{"row":73,"column":34},"end":{"row":73,"column":35},"action":"remove","lines":["e"],"id":254},{"start":{"row":73,"column":33},"end":{"row":73,"column":34},"action":"remove","lines":["m"]},{"start":{"row":73,"column":32},"end":{"row":73,"column":33},"action":"remove","lines":["e"]},{"start":{"row":73,"column":31},"end":{"row":73,"column":32},"action":"remove","lines":["h"]},{"start":{"row":73,"column":30},"end":{"row":73,"column":31},"action":"remove","lines":["c"]},{"start":{"row":73,"column":29},"end":{"row":73,"column":30},"action":"remove","lines":["S"]},{"start":{"row":73,"column":28},"end":{"row":73,"column":29},"action":"remove","lines":["r"]},{"start":{"row":73,"column":27},"end":{"row":73,"column":28},"action":"remove","lines":["o"]},{"start":{"row":73,"column":26},"end":{"row":73,"column":27},"action":"remove","lines":["l"]},{"start":{"row":73,"column":25},"end":{"row":73,"column":26},"action":"remove","lines":["o"]},{"start":{"row":73,"column":24},"end":{"row":73,"column":25},"action":"remove","lines":["c"]}],[{"start":{"row":73,"column":24},"end":{"row":73,"column":25},"action":"insert","lines":["w"],"id":255},{"start":{"row":73,"column":25},"end":{"row":73,"column":26},"action":"insert","lines":["e"]},{"start":{"row":73,"column":26},"end":{"row":73,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":73,"column":24},"end":{"row":73,"column":32},"action":"remove","lines":["weaArray"],"id":256},{"start":{"row":73,"column":24},"end":{"row":73,"column":36},"action":"insert","lines":["weatherArray"]}],[{"start":{"row":74,"column":22},"end":{"row":74,"column":38},"action":"remove","lines":["colorSchemeArray"],"id":257},{"start":{"row":74,"column":22},"end":{"row":74,"column":23},"action":"insert","lines":["w"]},{"start":{"row":74,"column":23},"end":{"row":74,"column":24},"action":"insert","lines":["e"]},{"start":{"row":74,"column":24},"end":{"row":74,"column":25},"action":"insert","lines":["a"]}],[{"start":{"row":74,"column":22},"end":{"row":74,"column":25},"action":"remove","lines":["wea"],"id":258},{"start":{"row":74,"column":22},"end":{"row":74,"column":34},"action":"insert","lines":["weatherArray"]}],[{"start":{"row":74,"column":38},"end":{"row":74,"column":48},"action":"remove","lines":["schemeName"],"id":259},{"start":{"row":74,"column":38},"end":{"row":74,"column":39},"action":"insert","lines":["w"]},{"start":{"row":74,"column":39},"end":{"row":74,"column":40},"action":"insert","lines":["e"]},{"start":{"row":74,"column":40},"end":{"row":74,"column":41},"action":"insert","lines":["a"]},{"start":{"row":74,"column":41},"end":{"row":74,"column":42},"action":"insert","lines":["t"]},{"start":{"row":74,"column":42},"end":{"row":74,"column":43},"action":"insert","lines":["h"]}],[{"start":{"row":74,"column":38},"end":{"row":74,"column":43},"action":"remove","lines":["weath"],"id":260},{"start":{"row":74,"column":38},"end":{"row":74,"column":50},"action":"insert","lines":["weatherOwner"]}],[{"start":{"row":76,"column":12},"end":{"row":76,"column":18},"action":"remove","lines":["header"],"id":261},{"start":{"row":76,"column":12},"end":{"row":76,"column":13},"action":"insert","lines":["w"]},{"start":{"row":76,"column":13},"end":{"row":76,"column":14},"action":"insert","lines":["e"]},{"start":{"row":76,"column":14},"end":{"row":76,"column":15},"action":"insert","lines":["a"]},{"start":{"row":76,"column":15},"end":{"row":76,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":76,"column":12},"end":{"row":76,"column":16},"action":"remove","lines":["weat"],"id":262},{"start":{"row":76,"column":12},"end":{"row":76,"column":19},"action":"insert","lines":["weather"]}],[{"start":{"row":76,"column":41},"end":{"row":76,"column":42},"action":"remove","lines":["r"],"id":263},{"start":{"row":76,"column":40},"end":{"row":76,"column":41},"action":"remove","lines":["o"]},{"start":{"row":76,"column":39},"end":{"row":76,"column":40},"action":"remove","lines":["l"]},{"start":{"row":76,"column":38},"end":{"row":76,"column":39},"action":"remove","lines":["o"]},{"start":{"row":76,"column":37},"end":{"row":76,"column":38},"action":"remove","lines":["C"]}],[{"start":{"row":76,"column":37},"end":{"row":76,"column":38},"action":"insert","lines":["I"],"id":264},{"start":{"row":76,"column":38},"end":{"row":76,"column":39},"action":"insert","lines":["m"]},{"start":{"row":76,"column":39},"end":{"row":76,"column":40},"action":"insert","lines":["a"]},{"start":{"row":76,"column":40},"end":{"row":76,"column":41},"action":"insert","lines":["g"]},{"start":{"row":76,"column":41},"end":{"row":76,"column":42},"action":"insert","lines":["e"]}],[{"start":{"row":76,"column":45},"end":{"row":76,"column":61},"action":"remove","lines":["colorSchemeArray"],"id":265},{"start":{"row":76,"column":45},"end":{"row":76,"column":46},"action":"insert","lines":["w"]},{"start":{"row":76,"column":46},"end":{"row":76,"column":47},"action":"insert","lines":["e"]},{"start":{"row":76,"column":47},"end":{"row":76,"column":48},"action":"insert","lines":["a"]},{"start":{"row":76,"column":48},"end":{"row":76,"column":49},"action":"insert","lines":["t"]},{"start":{"row":76,"column":49},"end":{"row":76,"column":50},"action":"insert","lines":["h"]},{"start":{"row":76,"column":50},"end":{"row":76,"column":51},"action":"insert","lines":["e"]}],[{"start":{"row":76,"column":45},"end":{"row":76,"column":51},"action":"remove","lines":["weathe"],"id":266},{"start":{"row":76,"column":45},"end":{"row":76,"column":57},"action":"insert","lines":["weatherArray"]}],[{"start":{"row":76,"column":67},"end":{"row":76,"column":78},"action":"remove","lines":["colorHeader"],"id":267},{"start":{"row":76,"column":67},"end":{"row":76,"column":68},"action":"insert","lines":["m"]},{"start":{"row":76,"column":68},"end":{"row":76,"column":69},"action":"insert","lines":["a"]}],[{"start":{"row":76,"column":69},"end":{"row":76,"column":70},"action":"insert","lines":["i"],"id":268},{"start":{"row":76,"column":70},"end":{"row":76,"column":71},"action":"insert","lines":["n"]}],[{"start":{"row":76,"column":67},"end":{"row":76,"column":71},"action":"remove","lines":["main"],"id":269},{"start":{"row":76,"column":67},"end":{"row":76,"column":77},"action":"insert","lines":["mainLayout"]}],[{"start":{"row":78,"column":77},"end":{"row":78,"column":79},"action":"insert","lines":["*/"],"id":270},{"start":{"row":77,"column":8},"end":{"row":77,"column":10},"action":"insert","lines":["/*"]}],[{"start":{"row":19,"column":14},"end":{"row":19,"column":15},"action":"insert","lines":["C"],"id":271},{"start":{"row":19,"column":15},"end":{"row":19,"column":16},"action":"insert","lines":["l"]},{"start":{"row":19,"column":16},"end":{"row":19,"column":17},"action":"insert","lines":["a"]},{"start":{"row":19,"column":17},"end":{"row":19,"column":18},"action":"insert","lines":["s"]},{"start":{"row":19,"column":18},"end":{"row":19,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"insert","lines":["m"],"id":272},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"insert","lines":["a"]},{"start":{"row":19,"column":24},"end":{"row":19,"column":25},"action":"insert","lines":["i"]},{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"insert","lines":["n"]},{"start":{"row":19,"column":26},"end":{"row":19,"column":27},"action":"insert","lines":["_"]}],[{"start":{"row":19,"column":27},"end":{"row":19,"column":28},"action":"insert","lines":["l"],"id":273},{"start":{"row":19,"column":28},"end":{"row":19,"column":29},"action":"insert","lines":["a"]},{"start":{"row":19,"column":29},"end":{"row":19,"column":30},"action":"insert","lines":["y"]},{"start":{"row":19,"column":30},"end":{"row":19,"column":31},"action":"insert","lines":["o"]},{"start":{"row":19,"column":31},"end":{"row":19,"column":32},"action":"insert","lines":["u"]},{"start":{"row":19,"column":32},"end":{"row":19,"column":33},"action":"insert","lines":["t"]}],[{"start":{"row":19,"column":33},"end":{"row":19,"column":34},"action":"insert","lines":["_"],"id":274},{"start":{"row":19,"column":34},"end":{"row":19,"column":35},"action":"insert","lines":["m"]},{"start":{"row":19,"column":35},"end":{"row":19,"column":36},"action":"insert","lines":["y"]}],[{"start":{"row":19,"column":36},"end":{"row":19,"column":37},"action":"insert","lines":["_"],"id":275},{"start":{"row":19,"column":37},"end":{"row":19,"column":38},"action":"insert","lines":["w"]},{"start":{"row":19,"column":38},"end":{"row":19,"column":39},"action":"insert","lines":["e"]},{"start":{"row":19,"column":39},"end":{"row":19,"column":40},"action":"insert","lines":["a"]},{"start":{"row":19,"column":40},"end":{"row":19,"column":41},"action":"insert","lines":["t"]},{"start":{"row":19,"column":41},"end":{"row":19,"column":42},"action":"insert","lines":["h"]},{"start":{"row":19,"column":42},"end":{"row":19,"column":43},"action":"insert","lines":["e"]},{"start":{"row":19,"column":43},"end":{"row":19,"column":44},"action":"insert","lines":["r"]}],[{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"insert","lines":["C"],"id":276},{"start":{"row":41,"column":15},"end":{"row":41,"column":16},"action":"insert","lines":["l"]},{"start":{"row":41,"column":16},"end":{"row":41,"column":17},"action":"insert","lines":["a"]},{"start":{"row":41,"column":17},"end":{"row":41,"column":18},"action":"insert","lines":["s"]},{"start":{"row":41,"column":18},"end":{"row":41,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":41,"column":22},"end":{"row":41,"column":44},"action":"insert","lines":["main_layout_my_weather"],"id":277}],[{"start":{"row":41,"column":35},"end":{"row":41,"column":36},"action":"remove","lines":["y"],"id":278},{"start":{"row":41,"column":34},"end":{"row":41,"column":35},"action":"remove","lines":["m"]}],[{"start":{"row":41,"column":34},"end":{"row":41,"column":35},"action":"insert","lines":["n"],"id":279},{"start":{"row":41,"column":35},"end":{"row":41,"column":36},"action":"insert","lines":["a"]},{"start":{"row":41,"column":36},"end":{"row":41,"column":37},"action":"insert","lines":["c"]},{"start":{"row":41,"column":37},"end":{"row":41,"column":38},"action":"insert","lines":["h"]},{"start":{"row":41,"column":38},"end":{"row":41,"column":39},"action":"insert","lines":["b"]},{"start":{"row":41,"column":39},"end":{"row":41,"column":40},"action":"insert","lines":["a"]},{"start":{"row":41,"column":40},"end":{"row":41,"column":41},"action":"insert","lines":["r"]}],[{"start":{"row":41,"column":41},"end":{"row":41,"column":42},"action":"insert","lines":["n"],"id":280}],[{"start":{"row":63,"column":14},"end":{"row":63,"column":15},"action":"insert","lines":["C"],"id":281},{"start":{"row":63,"column":15},"end":{"row":63,"column":16},"action":"insert","lines":["l"]},{"start":{"row":63,"column":16},"end":{"row":63,"column":17},"action":"insert","lines":["a"]},{"start":{"row":63,"column":17},"end":{"row":63,"column":18},"action":"insert","lines":["s"]},{"start":{"row":63,"column":18},"end":{"row":63,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":63,"column":22},"end":{"row":63,"column":44},"action":"insert","lines":["main_layout_my_weather"],"id":282}],[{"start":{"row":63,"column":34},"end":{"row":63,"column":36},"action":"remove","lines":["my"],"id":283},{"start":{"row":63,"column":34},"end":{"row":63,"column":35},"action":"insert","lines":["a"]},{"start":{"row":63,"column":35},"end":{"row":63,"column":36},"action":"insert","lines":["r"]},{"start":{"row":63,"column":36},"end":{"row":63,"column":37},"action":"insert","lines":["b"]},{"start":{"row":63,"column":37},"end":{"row":63,"column":38},"action":"insert","lines":["e"]},{"start":{"row":63,"column":38},"end":{"row":63,"column":39},"action":"insert","lines":["i"]},{"start":{"row":63,"column":39},"end":{"row":63,"column":40},"action":"insert","lines":["t"]}],[{"start":{"row":76,"column":22},"end":{"row":76,"column":25},"action":"remove","lines":["css"],"id":284},{"start":{"row":76,"column":22},"end":{"row":76,"column":23},"action":"insert","lines":["ф"]},{"start":{"row":76,"column":23},"end":{"row":76,"column":24},"action":"insert","lines":["в"]},{"start":{"row":76,"column":24},"end":{"row":76,"column":25},"action":"insert","lines":["в"]},{"start":{"row":76,"column":25},"end":{"row":76,"column":26},"action":"insert","lines":["С"]}],[{"start":{"row":76,"column":25},"end":{"row":76,"column":26},"action":"remove","lines":["С"],"id":285},{"start":{"row":76,"column":24},"end":{"row":76,"column":25},"action":"remove","lines":["в"]},{"start":{"row":76,"column":23},"end":{"row":76,"column":24},"action":"remove","lines":["в"]},{"start":{"row":76,"column":22},"end":{"row":76,"column":23},"action":"remove","lines":["ф"]}],[{"start":{"row":76,"column":22},"end":{"row":76,"column":23},"action":"insert","lines":["a"],"id":286},{"start":{"row":76,"column":23},"end":{"row":76,"column":24},"action":"insert","lines":["d"]},{"start":{"row":76,"column":24},"end":{"row":76,"column":25},"action":"insert","lines":["d"]}],[{"start":{"row":76,"column":22},"end":{"row":76,"column":25},"action":"remove","lines":["add"],"id":287},{"start":{"row":76,"column":22},"end":{"row":76,"column":30},"action":"insert","lines":["addClass"]}],[{"start":{"row":76,"column":31},"end":{"row":76,"column":82},"action":"remove","lines":["'backgroundImage', weatherArray[styleId].mainLayout"],"id":288}],[{"start":{"row":76,"column":31},"end":{"row":76,"column":32},"action":"insert","lines":["w"],"id":289},{"start":{"row":76,"column":32},"end":{"row":76,"column":33},"action":"insert","lines":["e"]},{"start":{"row":76,"column":33},"end":{"row":76,"column":34},"action":"insert","lines":["a"]},{"start":{"row":76,"column":34},"end":{"row":76,"column":35},"action":"insert","lines":["t"]}],[{"start":{"row":76,"column":31},"end":{"row":76,"column":35},"action":"remove","lines":["weat"],"id":290},{"start":{"row":76,"column":31},"end":{"row":76,"column":43},"action":"insert","lines":["weatherArray"]}],[{"start":{"row":76,"column":43},"end":{"row":76,"column":45},"action":"insert","lines":["[]"],"id":291}],[{"start":{"row":76,"column":44},"end":{"row":76,"column":45},"action":"insert","lines":["s"],"id":292},{"start":{"row":76,"column":45},"end":{"row":76,"column":46},"action":"insert","lines":["t"]},{"start":{"row":76,"column":46},"end":{"row":76,"column":47},"action":"insert","lines":["y"]},{"start":{"row":76,"column":47},"end":{"row":76,"column":48},"action":"insert","lines":["l"]}],[{"start":{"row":76,"column":44},"end":{"row":76,"column":48},"action":"remove","lines":["styl"],"id":293},{"start":{"row":76,"column":44},"end":{"row":76,"column":51},"action":"insert","lines":["styleId"]}],[{"start":{"row":76,"column":52},"end":{"row":76,"column":53},"action":"insert","lines":["."],"id":294}],[{"start":{"row":76,"column":53},"end":{"row":76,"column":54},"action":"insert","lines":["m"],"id":295},{"start":{"row":76,"column":54},"end":{"row":76,"column":55},"action":"insert","lines":["a"]},{"start":{"row":76,"column":55},"end":{"row":76,"column":56},"action":"insert","lines":["i"]},{"start":{"row":76,"column":56},"end":{"row":76,"column":57},"action":"insert","lines":["n"]}],[{"start":{"row":76,"column":57},"end":{"row":76,"column":58},"action":"insert","lines":["L"],"id":296}],[{"start":{"row":76,"column":53},"end":{"row":76,"column":58},"action":"remove","lines":["mainL"],"id":297},{"start":{"row":76,"column":53},"end":{"row":76,"column":68},"action":"insert","lines":["mainLayoutClass"]}],[{"start":{"row":76,"column":11},"end":{"row":76,"column":12},"action":"remove","lines":["."],"id":298}],[{"start":{"row":76,"column":11},"end":{"row":76,"column":12},"action":"insert","lines":["#"],"id":299}],[{"start":{"row":76,"column":21},"end":{"row":76,"column":52},"action":"insert","lines":[".removeClass(\"myClass noClass\")"],"id":300}],[{"start":{"row":76,"column":34},"end":{"row":76,"column":51},"action":"remove","lines":["\"myClass noClass\""],"id":301}],[{"start":{"row":20,"column":14},"end":{"row":20,"column":31},"action":"insert","lines":["layout_my_weather"],"id":302}],[{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["1"],"id":303}],[{"start":{"row":42,"column":14},"end":{"row":42,"column":37},"action":"insert","lines":["layout_nachbarn_weather"],"id":304}],[{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"insert","lines":["2"],"id":305}],[{"start":{"row":64,"column":14},"end":{"row":64,"column":35},"action":"insert","lines":["layout_arbeit_weather"],"id":306}],[{"start":{"row":64,"column":20},"end":{"row":64,"column":21},"action":"insert","lines":["3"],"id":307}],[{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"remove","lines":["2"],"id":308}],[{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"insert","lines":["1"],"id":309}],[{"start":{"row":64,"column":20},"end":{"row":64,"column":21},"action":"remove","lines":["3"],"id":310}],[{"start":{"row":64,"column":20},"end":{"row":64,"column":21},"action":"insert","lines":["1"],"id":311}],[{"start":{"row":76,"column":84},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":312},{"start":{"row":77,"column":0},"end":{"row":77,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":77,"column":8},"end":{"row":77,"column":84},"action":"insert","lines":["$('#weather').removeClass().addClass(weatherArray[styleId].mainLayoutClass);"],"id":313}],[{"start":{"row":77,"column":12},"end":{"row":77,"column":19},"action":"remove","lines":["weather"],"id":314},{"start":{"row":77,"column":12},"end":{"row":77,"column":13},"action":"insert","lines":["l"]},{"start":{"row":77,"column":13},"end":{"row":77,"column":14},"action":"insert","lines":["a"]},{"start":{"row":77,"column":14},"end":{"row":77,"column":15},"action":"insert","lines":["y"]},{"start":{"row":77,"column":15},"end":{"row":77,"column":16},"action":"insert","lines":["o"]},{"start":{"row":77,"column":16},"end":{"row":77,"column":17},"action":"insert","lines":["u"]},{"start":{"row":77,"column":17},"end":{"row":77,"column":18},"action":"insert","lines":["t"]}],[{"start":{"row":77,"column":18},"end":{"row":77,"column":19},"action":"insert","lines":["_"],"id":315},{"start":{"row":77,"column":19},"end":{"row":77,"column":20},"action":"insert","lines":["1"]}],[{"start":{"row":77,"column":68},"end":{"row":77,"column":83},"action":"remove","lines":["mainLayoutClass"],"id":316},{"start":{"row":77,"column":68},"end":{"row":77,"column":75},"action":"insert","lines":["layout1"]}]]},"ace":{"folds":[],"scrolltop":660,"scrollleft":0,"selection":{"start":{"row":77,"column":75},"end":{"row":77,"column":75},"isBackwards":false},"options":{"tabSize":2,"useSoftTabs":true,"guessTabSize":false,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":4,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1635338612414,"hash":"bde333fca5f5d93334d5ff61f64a74d63ccc7a43"}