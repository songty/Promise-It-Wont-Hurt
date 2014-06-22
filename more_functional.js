var q = require('q'), 
qhttp = require('q-io/http');

qhttp.read("http://localhost:7000/")
.then(function (id) {
  return qhttp.read("http://localhost:7001/" + id);
})
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done();

// var func = function(id) {
	
// };
// function grabId() {
// 	qhttp.read('http://localhost:7000/');
// }

// function grabJSON(id) {
// 	return qhttp.read("http://localhost:7001/" + id);
// }

