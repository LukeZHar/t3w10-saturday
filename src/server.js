// Here, we configure the server
// Reason for separation:
// Don't often need to start the server 
// Can import the app without worrying about starting the server

// Import express
const express = require('express');

// Make an instance of express server
const app = express();

// Build-in middleware for server to read JSON data
app.use(express.json());

// Start defining routes: instance.verb(url, middleware/callback)
// GET localhost:3300/
app.get('/', (req, res) => {
    res.json({
        message: "Hello world!"
    })
});

const UserRoute = require('./routes/users.js');
app.use('/users', UserRoute);

app.use((error, req, res, next) => {
    console.log("Server threw an error:" + error.message);

    res.json({
        status:500,
        error: error.message,
        errorFull: JSON.stringify(error)
    });
});

module.exports = {app};