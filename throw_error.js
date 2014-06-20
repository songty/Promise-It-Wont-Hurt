var q = require('q');

var input = process.argv[2];

function parsePromised(arg) {
	var defer = q.defer();
	try {
		JSON.parse(arg);
	} catch(e) {
		defer.reject(e);
	}
	defer.resolve();
	return defer.promise;
}

parsePromised(input).then(null, console.log);