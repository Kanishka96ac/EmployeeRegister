const bodyParser = require('body-parser');
const express = require('express');

//Local imports
const app = express();

//Middleware
app.use(bodyParser.json());


app.listen(3000, ()=> console.log('Server Started at Port 3000'))



// var http = require('http') , https = require('https') , express = require('express') , app = express();

// http.createServer(app).listen(80); https.createServer({ ... }, app).listen(443);