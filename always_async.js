var q = require('q');
var defer = q.defer();

defer.resolve('SECOND');

defer.promise.then(console.log);

console.log('FIRST');
