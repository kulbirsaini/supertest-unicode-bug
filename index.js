
var path = require('path');

var app = require(path.join(__dirname, 'app'));

app().listen(process.env.PORT || 4000, function() {
  console.log('Started server');
});
