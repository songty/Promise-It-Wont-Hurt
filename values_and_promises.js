var q = require('q');
var defer = q.defer();

function attachTitle(prependTo) {
	var result = 'DR. ' + prependTo;
	return result;
}

defer.resolve('MANHATTAN');
defer.promise.then(attachTitle).then(console.log);
// defer.promise.then(function(data) {return attachTitle(data); }).then(console.log);