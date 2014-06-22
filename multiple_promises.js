var q = require('q');

var promise1 = q.defer();
var promise2 = q.defer();

function all(p1, p2) {
	var defer = q.defer();
	var counter = 0;
	var v1, v2;

	p1.promise.then(function(v) {
		counter ++;
		v1 = v;
		if (counter === 2) {
			defer.resolve([v1, v2]);
		} 
	}.then(null, defer.reject));
	p2.promise.then(function(v) {
		counter ++;
		v2 = v;
		if (counter === 2) {
			defer.resolve([v1, v2]);
		}
	}.then(null, defer.reject));
	return defer.promise;
}
setTimeout(function(){
	promise1.resolve('PROMISES');
	promise2.resolve('FTW');
}, 200);

all(promise1, promise2).then(console.log).done();




