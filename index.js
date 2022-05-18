const express = require('express');
const server = express();
fileSystem = require('fs');
const path = require('path');
// This will be call by APPLE TO VERIFY THE APP-SITE-ASSOCIATION
// Make the 'apple-app-site-association' accessable to apple to verify the association
server.get('/apple-app-site-association', function(request, response) {
    var filePath = path.join(__dirname, '/apple-app-site-association');
    console.log(filePath);

    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(response);
    console.log(readStream);
});

// HOME PAGE
server.get('/home', function(request, response) {
    response.sendFile(__dirname +  '/home.html');
});

// ABOUT PAGE
server.get('/about', function(request, response) {
    response.sendFile(__dirname +  '/about.html');
});


server.listen(80);
