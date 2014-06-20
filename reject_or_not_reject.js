var q = require('q');
var defer = q.defer();

defer.resolve('I FIRED');
defer.reject('I DID NOT FIRE');

defer.promise.then(console.log, console.log);