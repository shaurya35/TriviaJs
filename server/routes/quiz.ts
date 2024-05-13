import express from "express";
const router = express.Router();

//user-quiz route
router.get('/', (req, res) => {
    res.send('user here- quiz ');
});


//user-quiz easy
router.get('/easy', (req, res) => {
    res.send('user here- quiz - easy');
});


//user-quiz easy
router.get('/medium', (req, res) => {
    res.send('user here- quiz - med');
});


//user-quiz easy
router.get('/hard', (req, res) => {
    res.send('user here- quiz - hard');
});


//user-quiz easy
router.get('/profile', (req, res) => {
    res.send('user here- profile');
});


//user-quiz easy
router.post('/feedback', (req, res) => {
    res.send('user here- feedback');
});

// export the router module so that indexcan .js file can use it
module.exports = router;