const express = require('express');
const router = express.Router();

//  GET localhost:3300/users
router.get('/', (req, res) => {
    // Database query to get the list of users

    // Attach the query result in the response body
    res.json({
        data: [
            "Luke",
            "Leia",
            "Han",
            "Chewbacca",
            "Yoda"
        ]
    });
});

// POST localhost:3300/users/signup
router.post('/signup', (req, res) => {
    // receivedUserData that receives the data from the user request body
    let receivedUserData = req.body;

    // Get the hashed password from the front-end and encrypt it
    receivedUserData.password = "EncryptedPassword";

    // Store the data to the database
    let databaseResult = {...receivedUserData};

    // Send the newly create user data as a response acknowledgment
    res.json(databaseResult);

});

module.exports = router;