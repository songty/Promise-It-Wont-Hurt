var q = require('q');
var defer = q.defer();

function delayTIme() {
	setTimeout(function() {defer.resolve("RESOLVED!");}, 300);
	return defer.promise;
}


delayTIme().then(console.log);



      // var q = require('q');
      // var def = q.defer();
    
      // def.promise.then(console.log);
      // setTimeout(def.resolve, 300, "RESOLVED!");

