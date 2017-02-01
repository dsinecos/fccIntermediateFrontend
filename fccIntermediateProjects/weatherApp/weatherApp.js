$(document).ready(function weatherData() {

	var $latitude;
	var $longitude;

	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(function(position){

			$latitude = position.coords.latitude;
			$longitude = position.coords.longitude;

			$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
			.done (function(location)
			{

				$('.location').append(location.country_name + ", ");
				$('.location').append(location.state + ", ");
				$('.location').append(location.city);

			});				

			$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + $latitude + "&lon=" + $longitude + "&APPID=71323636795d62e17fc6101b104d40f0", function(json){

				String.prototype.toCapital = function() {
					return this.charAt(0).toUpperCase() + this.slice(1);
				}

				$(".temperature .temperatureValue").prepend(Math.round(json.main.temp - 275.16) + " ");
				$(".weatherDescription").append(json.weather[0].description.toCapital());
				$(".forIcon").append("<img src=" + "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png>");					

			});

			$(".toggleTemperature").click(switchTemperature);

			function switchTemperature() {

				var tempClass = document.getElementsByClassName("temperature");
				// .getAttribute("data-temp_scale");

				var tempScale = $(".temperature").attr("data-tempscale");
				console.log(tempScale);

				// msglist.setAttribute("data-list-size", +show+3);				

				// var tempScale = $(".temperature").data("temp_scale");

					// console.log($(".temperature").data("temp_scale"))

					if (tempScale == 'in_celsius') {

						var celsius = parseInt($(".temperature .temperatureValue").text());
						var toFahrenheit = (celsius * 9) /5 + 32;

						$(".temperature").attr("data-tempscale", "in_fahrenheit");
						$(".temperature .temperatureValue").text(toFahrenheit + " ");

						console.log("Before fahrenheit worked");
						$(".toggleTemperature").text("Degree Fahrenheit");
						console.log("After fahrenheit worked");

					} else if (tempScale == 'in_fahrenheit') {

						var fahrenheit = parseInt($(".temperature .temperatureValue").text());
						var toCelsius = Math.round((fahrenheit - 32) * 5 / 9);

						$(".temperature").attr("data-tempscale", "in_celsius");
						$(".temperature .temperatureValue").text(toCelsius + " ");
						$(".toggleTemperature").text("Degree Celsius");
					}

				/*					
					var celsius = parseInt($(".temperature .temperatureValue").text())
					var toFahrenheit = (celsius * 9) /5 + 32
					$(".temperature .temperatureValue").text(toFahrenheit + " ");
					*/

				}
			});
	} 


});