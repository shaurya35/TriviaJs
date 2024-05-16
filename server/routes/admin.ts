import express from "express";
const router = express.Router();

const {
  getAllQuestions,
  getQuestionById,
  createQuestions,
  deleteQuestion,
  updateQuestion,

  getEasyQuestions,

  getMedQuestions,

  getHardQuestions,
} = require("../controllers/adminController");


//admin panel route
router.get("/", (req, res) => {
  res.send("admin here");
});


//admin panel see all profiles
router.get("/all-profiles", (req, res) => {
  res.send("admin here- all profiles");
});


//admin profile see all questions
router.get("/questions", getAllQuestions);
router.get("/questions/:id", getQuestionById);
router.post("/questions", createQuestions);
router.delete("/questions/:id", deleteQuestion);
router.patch("/questions/:id", updateQuestion);


//admin panel easy
router.get("/questions/easy", getEasyQuestions);
router.get("/questions/easy/:id", (req, res) => {
  res.send("admin here- questions - getEasyQuestionById");
});
router.put("/questions/easy", (req, res) => {
  res.send("admin here- questions - postEasy");
});
router.delete("/questions/easy/:id", (req, res) => {
  res.send("admin here- questions - deleteEasyById");
});
router.patch("/questions/easy/:id", (req, res) => {
  res.send("admin here- questions - updateEasyById");
});


//admin panel med
router.get("/questions/medium", getMedQuestions);
router.get("/questions/medium/:id", (req, res) => {
  res.send("admin here- questions - getMedQuestionById");
});
router.post("/questions/medium", (req, res) => {
  res.send("admin here- questions - postMed");
});
router.delete("/questions/medium/:id", (req, res) => {
  res.send("admin here- questions - deleteMedById");
});
router.patch("/questions/medium/:id", (req, res) => {
  res.send("admin here- questions - updateMedById");
});


//admin panel hard
router.get("/questions/hard", getHardQuestions);
router.post("/questions/hard", (req, res) => {
  res.send("admin here- questions - postHard");
});
router.get("/questions/hard/:id", (req, res) => {
  res.send("admin here- questions - getEasyQuestionById");
});
router.delete("/questions/hard/:id", (req, res) => {
  res.send("admin here- questions - deleteHardById");
});
router.patch("/questions/hard/:id", (req, res) => {
  res.send("admin here- questions - updateHardById");
});


// export the router module so that indexcan .js file can use it
module.exports = router;
