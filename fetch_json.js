var HTTP = require('q-io/http');

HTTP.read('http://localhost:1337').then(function(data) {
	var result = JSON.parse(data);
	console.log(result);
});