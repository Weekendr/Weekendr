const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');
const db = require('./database');

// Utilities
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(express.static('./client'));
app.get('/', (request, response) => response.sendFile('index.html'));

// Routing
require('./routes.js')(app, express);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => console.log('Server listening on port: ', app.get('port')));
