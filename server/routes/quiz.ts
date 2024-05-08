const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is user route');
    // this gets executed when user visit http://localhost:8080/quiz
});

router.get('/101', (req, res) => {
    res.send('this is user 101 route');
    // this gets executed when user visit http://localhost:8080/quiz/101
});

router.get('/102', (req, res) => {
    res.send('this is user 102 route');
    // this gets executed when user visit http://localhost:8080/quiz/102
});

// export the router module so that indexcan .js file can use it
module.exports = router;