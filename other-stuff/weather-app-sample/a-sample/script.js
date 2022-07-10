
console.log("hello")

$("#but").click(function() {
    let zippo = $("#in").val();
    $("#in").val("");
    let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zippo},us&units=imperial&APPID=7f5bbd6dd05e3fdd62172d000f0b41ef`;
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json"
    }).then(function(response) {
      getData(response);
    });
  });
  
  function getData(response) {
    let cityName = response.name;
    let countryName = response.sys.country;
    let curTemp = response.main.temp;
    let overallStat = response.weather[0].description;
    let minTemp = response.main.temp_min;
    let maxTemp = response.main.temp_max;
    console.log(cityName);
    console.log(curTemp);
    buildDom(cityName, countryName, curTemp, overallStat, minTemp, maxTemp);
  }
  
  function buildDom(city, country, temp, over, min, max) {
    $("h1").html(`${city} - ${country}`);
    $("<h3>")
      .attr("id", "temp")
      .appendTo("#container1");
    $("#temp")
      .html(`${temp}`)
      .css({ "margin-top": "40px", "font-size": "50px" });
    $("<h3>")
      .attr("id", "description")
      .appendTo("#container1");
    $("#description")
      .html(`${over}`)
      .css({ "margin-top": "10px", "font-size": "30px" });
    
    $("#cont2h").html(`min: ${min} - max: ${max}`);
  }
  