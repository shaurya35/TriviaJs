import express from "express";
const router = express.Router();


router.get('/', (req, res) => {
    res.send('this is quiz route');
    // this gets executed when user visit http://localhost:8080/quiz
});

router.get('/:id', (req, res) => {
    res.send('this is quiz route');
    // this gets executed when user visit http://localhost:8080/quiz
});

router.get('/id:/easy', (req, res) => {
    res.send('this is user quiz easy route');
    // this gets executed when user visit http://localhost:8080/quiz/101
});

router.get('/id:/medium', (req, res) => {
    res.send('this is user quiz medium route');
    // this gets executed when user visit http://localhost:8080/quiz/102
});

router.get('/id:/hard', (req, res) => {
    res.send('this is user quiz hard route');
    // this gets executed when user visit http://localhost:8080/quiz/102
});

router.get('/id:/profile', (req, res) => {
    res.send('this is user profile route');
    // this gets executed when user visit http://localhost:8080/quiz/102
});

router.post('/id:/feedback', (req, res) => {
    res.send('this is user feedback route');
    // this gets executed when user visit http://localhost:8080/quiz/102
});

// export the router module so that indexcan .js file can use it
module.exports = router;