// Here, we initialise the serve
const {app} = require('./server.js');

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
});