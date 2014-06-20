var q = require('q');
var defer = q.defer();

var errors = [];

function delayTIme() {
	setTimeout(function() {
		var err = new Error("REJECTED!");
		errors.push(err);
		defer.reject(err);
	}, 300);
	return defer.promise;
}

function rejected(err) {
	// if (errors[0] === err) { console.log('match'); }
	// console.log('error is item at index %s', errors.indexOf(err));
	console.log(err.message);
}

delayTIme().then(null, rejected);
// delayTIme().then(null, rejected);
