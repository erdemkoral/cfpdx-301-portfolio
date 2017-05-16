'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static('./public'));
app.get('/', function(request, response){
  response.sendFile('index.html', {root:'./public'})
});

app.listen(PORT, function(){
  console.log(`Listening on port: ${PORT}`);
});
