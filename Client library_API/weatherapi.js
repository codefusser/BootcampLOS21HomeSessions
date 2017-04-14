//This snippet is a sample of using a JavaScript client library to access a public API

//require the https module to enable a connection to the https protocol URL of the public API
let http = require('http');
let key = require('./modules/auth.js');

let _key = key;

let location = 'Lagos';
//Use the GET method to send a request to the API which will pass the response to the callback
const request = http.get('http://api.apixu.com/v1/current.json?key='+_key+'&q='+location, function(response){
	let weatherData = "";
	//console.log(response.statusCode);

	//Call a data event that will be used to retrieve the data sent from the API in JSON format to the callback
	response.on("data", function(data){
		weatherData += data;
		if (response.statusCode === 200) {
			try{			
				weatherInfo = JSON.parse(weatherData);	
				console.log(weatherInfo);
			}catch(e){
				console.log("We encountered error while processing your request");
			}
		}else {
			console.log("There was an error in your request! Try again later");
		}
	}).on("error", function(e){
		console.error("The API is unavailable");
	});	
});

request.end();

//check for weather current condition text (current.condition.text)
//weather locaation
