var q = require('q');

var input = process.argv[2];

return q.fcall(function() {
	var defer = q.defer();
	try {
		JSON.parse(input);
	} catch(e) {
		defer.reject(e);
	}
	defer.resolve();
	return defer.promise;
}).then(null, console.log);

