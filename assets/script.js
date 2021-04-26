var containerEl = $(".container");
var containerHeader = $("<div>").addClass("header").text("Weather Dashboard");
var containerBody = $("<div>").addClass("containerBody");
var searchContainerEl = $("<div>").addClass("searchContainer");
var searchBox = $("<input>").addClass("searchBox");

var searchBtn = $("<div>").addClass("searchBtn");
var lineBreak = $("<div>").addClass("lineBreak");
var pastBtn00 = $("<div>").addClass("pastBtn");
var pastBtn01 = $("<div>").addClass("pastBtn");
var pastBtn02 = $("<div>").addClass("pastBtn");
var pastBtn03 = $("<div>").addClass("pastBtn");
var pastBtn04 = $("<div>").addClass("pastBtn");
var pastBtn05 = $("<div>").addClass("pastBtn");
var pastBtn06 = $("<div>").addClass("pastBtn");
var weatherBox = $("<div>").addClass("weatherBox");
var weatherToday = $("<div>").addClass("weatherToday");
var weatherForecast = $("<div>").addClass("weatherForecast");
var cityName = $("<div>").addClass("cityName");
var now = dayjs();
var today = now.format('M/DD/YYYY');
var temp = $("<div>").addClass("temp");
var wind = $("<div>").addClass("temp");
var humidity = $("<div>").addClass("temp");
var UVindex = $("<div>").addClass("temp");
var icon = $("<img>").addClass("temp01");

var date00 = $("<div>").addClass("temp01");
var icon00 = $("<img>").addClass("temp01");
var temp00 = $("<div>").addClass("temp01");
var wind00 = $("<div>").addClass("temp01");
var humidity00 = $("<div>").addClass("temp01");

var date01 = $("<div>").addClass("temp01");
var icon01 = $("<img>").addClass("temp01");
var temp01 = $("<div>").addClass("temp01");
var wind01 = $("<div>").addClass("temp01");
var humidity01 = $("<div>").addClass("temp01");

var date02 = $("<div>").addClass("temp01");
var icon02 = $("<img>").addClass("temp01");
var temp02 = $("<div>").addClass("temp01");
var wind02 = $("<div>").addClass("temp01");
var humidity02 = $("<div>").addClass("temp01");

var date03 = $("<div>").addClass("temp01");
var icon03 = $("<img>").addClass("temp01");
var temp03 = $("<div>").addClass("temp01");
var wind03 = $("<div>").addClass("temp01");
var humidity03 = $("<div>").addClass("temp01");

var date04 = $("<div>").addClass("temp01");
var icon04 = $("<img>").addClass("temp01");
var temp04 = $("<div>").addClass("temp01");
var wind04 = $("<div>").addClass("temp01");
var humidity04 = $("<div>").addClass("temp01");

var weatherForecastBody = $("<div>").addClass("weatherForecastBody");
var day00 = $("<div>").addClass("dayBox");
var day01 = $("<div>").addClass("dayBox");
var day02 = $("<div>").addClass("dayBox");
var day03 = $("<div>").addClass("dayBox");
var day04 = $("<div>").addClass("dayBox");


var input0 = localStorage.getItem("input0");
if (input0 == null){
    localStorage.setItem("input0", ("Kansas City"));
}








containerEl.append(containerHeader);
containerEl.append(containerBody);
containerBody.append(searchContainerEl);
searchContainerEl.text("Search for a City:");

searchContainerEl.append(searchBox);





searchContainerEl.append(searchBtn);
searchBtn.text("Search");


$(searchBtn).on("click", function (event) {
    var searchVal = searchBox.val().trim();
    localStorage.setItem("input0", (searchVal));
    console.log(searchVal)
    window.location.reload();
});

var pastCity06 = (localStorage.getItem("input7"));
localStorage.setItem("input8", (pastCity06));
var pastCity05 = (localStorage.getItem("input6"));
localStorage.setItem("input7", (pastCity05));
var pastCity04 = (localStorage.getItem("input5"));
localStorage.setItem("input6", (pastCity04));
var pastCity03 = (localStorage.getItem("input4"));
localStorage.setItem("input5", (pastCity03));
var pastCity02 = (localStorage.getItem("input3"));
localStorage.setItem("input4", (pastCity02));
var pastCity01 = (localStorage.getItem("input2"));
localStorage.setItem("input3", (pastCity01));
var pastCity00 = (localStorage.getItem("input1"));
localStorage.setItem("input2", (pastCity00));


var city = (localStorage.getItem("input0"));
localStorage.setItem("input1", (city));




searchContainerEl.append(lineBreak);

searchContainerEl.append(pastBtn00);
pastBtn00.text(pastCity00);
searchContainerEl.append(pastBtn01);
pastBtn01.text(pastCity01);
searchContainerEl.append(pastBtn02);
pastBtn02.text(pastCity02);
searchContainerEl.append(pastBtn03);
pastBtn03.text(pastCity03);
searchContainerEl.append(pastBtn04);
pastBtn04.text(pastCity04);
searchContainerEl.append(pastBtn05);
pastBtn05.text(pastCity05);
searchContainerEl.append(pastBtn06);
pastBtn06.text(pastCity06);

$(pastBtn00).on("click", function (event) {
    localStorage.setItem("input0", (pastCity00));
    console.log(pastCity00)
    window.location.reload();
});
$(pastBtn01).on("click", function (event) {
    localStorage.setItem("input0", (pastCity01));
    console.log(pastCity01)
    window.location.reload();
});
$(pastBtn02).on("click", function (event) {
    localStorage.setItem("input0", (pastCity02));
    console.log(pastCity02)
    window.location.reload();
});
$(pastBtn03).on("click", function (event) {
    localStorage.setItem("input0", (pastCity03));
    console.log(pastCity03)
    window.location.reload();
});
$(pastBtn04).on("click", function (event) {
    localStorage.setItem("input0", (pastCity04));
    console.log(pastCity04)
    window.location.reload();
});
$(pastBtn05).on("click", function (event) {
    localStorage.setItem("input0", (pastCity05));
    console.log(pastCity05)
    window.location.reload();
});
$(pastBtn06).on("click", function (event) {
    localStorage.setItem("input0", (pastCity06));
    console.log(pastCity06)
    window.location.reload();
});




containerBody.append(weatherBox);
weatherBox.append(weatherToday);


fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=imperial&appid=781799523a4708dd72dc5b8f93768388")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        console.log(data.name);




        weatherToday.append(cityName);
        cityName.text(data.city.name + " (" + today + ")" );
        cityName.append(temp);
        temp.text("Temp: " + data.list[0].main.temp + "°F");
        temp.append(wind);
        wind.text("Wind: " + data.list[0].wind.speed + " mph");
        wind.append(humidity);
        humidity.text("Humidity: " + data.list[0].main.humidity + " %");
        humidity.append(UVindex);
        UVindex.text("UV Index: " );
        var iconCode = data.list[0].weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        cityName.append(icon);
        icon.attr('src', iconUrl);


        weatherBox.append(weatherForecast);
        weatherForecast.text("5 Day Forecast: ");
        weatherForecast.append(weatherForecastBody);
        
        
        weatherForecastBody.append(day00);
        day00.append(date00);
        date00.text(data.list[1].dt_txt);

        date00.append(temp00);
        temp00.text("Temp: " + data.list[1].main.temp + "°F");
        temp00.append(wind00);
        wind00.text("Wind: " + data.list[1].wind.speed + " mph");
        wind00.append(humidity00);
        humidity00.text("Humidity: " + data.list[1].main.humidity + " %");
        var iconCode00 = data.list[1].weather[0].icon;
        var iconUrl00 = "http://openweathermap.org/img/w/" + iconCode00 + ".png";
        day00.append(icon00);
        icon00.attr('src', iconUrl00);

        weatherForecastBody.append(day01);
        day01.append(date01);
        date01.text(data.list[9].dt_txt);
        date01.append(temp01);
        temp01.text("Temp: " + data.list[9].main.temp + "°F");
        temp01.append(wind01);
        wind01.text("Wind: " + data.list[9].wind.speed + " mph");
        wind01.append(humidity01);
        humidity01.text("Humidity: " + data.list[9].main.humidity + " %");
        var iconCode01 = data.list[9].weather[0].icon;
        var iconUrl01 = "http://openweathermap.org/img/w/" + iconCode01 + ".png";
        day01.append(icon01);
        icon01.attr('src', iconUrl01);

        weatherForecastBody.append(day02);
        day02.append(date02);
        date02.text(data.list[19].dt_txt);
        date02.append(temp02);
        temp02.text("Temp: " + data.list[19].main.temp + "°F");
        temp02.append(wind02);
        wind02.text("Wind: " + data.list[19].wind.speed + " mph");
        wind02.append(humidity02);
        humidity02.text("Humidity: " + data.list[19].main.humidity + " %");
        var iconCode02 = data.list[19].weather[0].icon;
        var iconUrl02 = "http://openweathermap.org/img/w/" + iconCode02 + ".png";
        day02.append(icon02);
        icon02.attr('src', iconUrl02);

        weatherForecastBody.append(day03);
        day03.append(date03);
        date03.text(data.list[30].dt_txt);
        date03.append(temp03);
        temp03.text("Temp: " + data.list[30].main.temp + "°F");
        temp03.append(wind03);
        wind03.text("Wind: " + data.list[30].wind.speed + " mph");
        wind03.append(humidity03);
        humidity03.text("Humidity: " + data.list[30].main.humidity + " %");
        var iconCode03 = data.list[30].weather[0].icon;
        var iconUrl03 = "http://openweathermap.org/img/w/" + iconCode03 + ".png";
        day03.append(icon03);
        icon03.attr('src', iconUrl03);

        weatherForecastBody.append(day04);
        day04.append(date04);
        date04.text(data.list[39].dt_txt);
        date04.append(temp04);
        temp04.text("Temp: " + data.list[39].main.temp + "°F");
        temp04.append(wind04);
        wind04.text("Wind: " + data.list[39].wind.speed + " mph");
        wind04.append(humidity04);
        humidity04.text("Humidity: " + data.list[39].main.humidity + " %");
        var iconCode04 = data.list[39].weather[0].icon;
        var iconUrl04 = "http://openweathermap.org/img/w/" + iconCode04 + ".png";
        day04.append(icon04);
        icon04.attr('src', iconUrl04);




    })






fetch("https://api.openweathermap.org/data/2.5/forecast?q=London&appid=781799523a4708dd72dc5b8f93768388")
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        console.log(data.list[0].dt_txt);

  /*       day00.append(temp);
       temp00.text("Temp: " + data.list[1].main.temp + "°F");
        temp00.append(wind00);
        wind00.text("Wind: " + data.wind.speed + "mph");
        wind00.append(humidity00);
        humidity00.text("Humidity: " + data.main.humidity + " %");
        weatherForecastBody.append(day01);
        weatherForecastBody.append(day02);
        weatherForecastBody.append(day03);
        weatherForecastBody.append(day04);


        weatherToday.append(cityName);
        cityName.text(data.name + " (" + today + ")" );
        cityName.append(temp);
        temp.text("Temp: " + data.main.temp + "°F");
        temp.append(wind);
        wind.text("Wind: " + data.wind.speed + "mph");
        wind.append(humidity);
        humidity.text("Humidity: " + data.main.humidity + " %");
        humidity.append(UVindex);
        UVindex.text("UV Index: " + data.main.temp);
        */

    })