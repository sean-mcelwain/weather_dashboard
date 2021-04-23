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


containerEl.append(containerHeader);
containerEl.append(containerBody);
containerBody.append(searchContainerEl);
searchContainerEl.text("Search for a City:");

searchContainerEl.append(searchBox);
searchBox.text("Search for a City:");
searchContainerEl.append(searchBtn);
searchBtn.text("Search");
searchContainerEl.append(lineBreak);

searchContainerEl.append(pastBtn00);
pastBtn00.text("Austin");
searchContainerEl.append(pastBtn01);
pastBtn01.text("Chicago");
searchContainerEl.append(pastBtn02);
pastBtn02.text("New York");
searchContainerEl.append(pastBtn03);
pastBtn03.text("Orlando");
searchContainerEl.append(pastBtn04);
pastBtn04.text("San Franciso");
searchContainerEl.append(pastBtn05);
pastBtn05.text("Seattle");
searchContainerEl.append(pastBtn06);
pastBtn06.text("Atlanta");


containerBody.append(weatherBox);
weatherBox.append(weatherToday);
weatherToday.text("Search");
weatherBox.append(weatherForecast);
weatherForecast.text("Search");