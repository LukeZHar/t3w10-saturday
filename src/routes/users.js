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

module.exports = router;