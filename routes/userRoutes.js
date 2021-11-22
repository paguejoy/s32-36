
const express = require("express");
const router = express.Router();

const userController = require("./../controllers/userControllers");


//check if email exists
router.get("/email-exists", (req, res) => {

	userController.checkEmail(req.body).then( result => res.send(result))
})

//register a user
// http://localhost:4000/api/users
router.post("/register", (req, res) => {

	userController.register(req.body).then( result => res.send(result))
})

router.get("/", (req, res) => {

	userController.getAllUsers().then( result => res.send(result))
})


module.exports = router;