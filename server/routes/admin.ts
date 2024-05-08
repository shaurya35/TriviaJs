import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is admin route');
    // this gets executed when user visit http://localhost:8080/admin
});

router.get('/101', (req, res) => {
    res.send('this is admin 101 route');
    // this gets executed when user visit http://localhost:8080/admin/101
});

router.get('/102', (req, res) => {
    res.send('this is admin 102 route');
    // this gets executed when user visit http://localhost:8080/admin/102
});

// export the router module so that indexcan .js file can use it
module.exports = router;