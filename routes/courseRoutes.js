
const express = require("express");
const router = express.Router();

const courseController = require("./../controllers/courseControllers")

//create a course
router.post("/create-course", (req, res) => {
	courseController.createCourse(req.body).then(result => res.send(result))
})


//retrieving all courses
router.get("/", (req, res) => {
	courseController.getAllCourses().then(result => res.send(result))
})


//retrieving only active courses
router.get("/active-courses", (req, res) => {
	courseController.getActiveCourses().then(result => res.send(result))
})

//get a specific course using findOne()


//get specific course using findById()


//update isActive status of the course using findOneAndUpdate()


//update isActive status of the course using findByIdAndUpdate()


//delete course using findOneAndDelete()


//delete course using findByIdAndDelete()


module.exports = router;