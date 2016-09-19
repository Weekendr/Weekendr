const express = require('express');
// const redis = require("redis");
const path = require('path');
// const client = redis.createClient();
const app = express();

// client.on('error', function (err) {
//   console.log('Error ' + err);
// });

// client.set('string key', 'string val', redis.print);
// client.hset('hash key', 'hashtest 1', 'some value', redis.print);
// client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print);

// client.hkeys('hash key', function (err, replies) {

//   console.log(replies.length + ' replies:');
//   replies.forEach(function (reply, i) {
//     console.log('    ' + i + ': ' + reply);
//   });

//   client.quit();

// });

app.use(express.static('./client'));

app.get('*', function (request, response){
  response.sendFile(path.resolve('./client', 'index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('We are listening on: ', app.get('port')));

