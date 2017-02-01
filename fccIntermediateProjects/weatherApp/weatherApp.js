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
					
					//console.log(json);

					String.prototype.capitalize = function() {
						return this.charAt(0).toUpperCase() + this.slice(1);
					}

					$(".temperature").append(Math.round(json.main.temp - 275.16) + "Degree Celsius");
					$(".weatherDescription").append(json.weather[0].description.capitalize());					

				});
			});
	} 


});