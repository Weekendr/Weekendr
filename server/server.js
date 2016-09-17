const express = require('express');
const redis = require("redis"),

const app = express();
const path = require('path');
const client = redis.createClient();


app.use(express.static('./client'));

app.get('*', function (request, response){
  response.sendFile(path.resolve('./client', 'index.html'));
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('We are listening on: ', app.get('port')));

