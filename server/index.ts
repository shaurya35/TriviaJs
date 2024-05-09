import express from "express";
const app = express();

//dotenv
require("dotenv").config();

// Include route files
const adminRoute = require("./routes/admin");
const quizRoute = require("./routes/quiz");

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.send("<h1> HomePage  </h1>");
});

// Use routes
app.use("/admin", adminRoute);
app.use("/quiz", quizRoute);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
