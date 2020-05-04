$(document).ready(function () {
  //Creating the function to target the search button
  $("#searchWeather").on("click", function () {
    //console logging to make sure the button is being recgonized
    console.log("button clicked");

    //Variable targeting the city the user inputs
    var city = $("#citySearch").val();

    //if statement for if the user leaves the input field empty it shows an error message, if they enter a city it runs the ajax function
    if (city != "") {
      $.ajax({
        url:
          "http://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "$units=imperial" +
          "&appid=439d4b804bc8187953eb36d2a8c26a02",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
          console.log(data);
        },
      });
    } else {
      $("#error").html("Field is empty, add a city to continue!");
    }
  });
});
