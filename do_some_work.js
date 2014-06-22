var HTTP = require('q-io/http');

HTTP.read('http://localhost:7000').then(function(data) {
	return HTTP.read('http://localhost:7001/' + data);
}).then(JSON.parse).then(console.log).then(null, console.error).done();

