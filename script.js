$(document).ready(function () {
  //Creating the function to target the search button
  $("#searchWeather").on("click", function () {
    //console logging to make sure the button is being recgonized
    console.log("button clicked");

    //Variable targeting the city the user inputs
    var city = $("#citySearch").val();

    //if statement for if the user leaves the input field empty it shows an error message, if they enter a city it runs the ajax function
    if (city != "") {
      //api key
      var APIKey = "&appid=8f68f073f6effd90655cf43f02a0cf08";
      //queryURL
      var queryURL =
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;

      //ajax function pulling the data from the api
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(queryURL);
        console.log(response);
      });

      //   $.ajax({
      //     url:
      //       "https://api.openweathermap.org/data/2.5/weather?q=" +
      //       city +
      //       "$units=imperial" +
      //       "&appid=cc9834ce5b4718ede07fa983166b3ccc",
      //     type: "GET",
      //     dataType: "jsonp",
      //     success: function (data) {
      //       console.log(data);
      //     },
      //   });
    } else {
      $("#error").html("Field is empty, add a city to continue!");
    }
  });
});
