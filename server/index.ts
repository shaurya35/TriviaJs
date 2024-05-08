import express from "express";
const app = express();

app.get('/', (req, res) => {
    res.send('<h1> hello world </h1>');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});