// Here, we configure the server
// Reason for separation:
// Don't often need to start the server 
// Can import the app without worrying about starting the server

// Import express
const express = require('express');

// Make an instance of express server
const app = express();

// Start defining routes: instance.verb(url, middleware/callback)
// GET localhost:3300/
app.get('/', (req, res) => {
    res.json({
        message: "Hello world!"
    })
});

const UserRoute = require('./routes/users.js');
app.use('/users', UserRoute);

module.exports = {app};