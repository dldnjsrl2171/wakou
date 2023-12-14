const express = require('express');
const path = require('path');
const app = express();

const server = require('http').createServer(app);


server.listen(8080, () => {
  console.log("server started");
});

app.use( express.static( path.join(__dirname, '../wakoufront/build') ) );

app.get('/', function(request, response){
    response.sendFile( path.join(__dirname, '../wakoufront/build/index.html') )
});