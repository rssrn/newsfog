var logger = require('./app/logger.js');
var server = require('./app/server.js');

logger.log("Starting newsfog");

var app = server();

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
