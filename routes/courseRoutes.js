
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
router.get("/specific-course", (req, res) => {

	// console.log(req.body)	//object

	courseController.getSpecificCourse(req.body.courseName).then( result => res.send(result))
})


//get specific course using findById()
router.get("/:courseId", (req, res) => {

	// console.log(req.params)	//{ courseId: '61979f60f63f4531cd77b395' }
	let paramsId = req.params.courseId
	courseController.getCourseById(paramsId).then(result => res.send(result))
})

//update isActive status of the course using findOneAndUpdate()
	//update isActive status to false
router.put("/archive", (req, res) => {

	courseController.archiveCourse(req.body.courseName).then( result => res.send(result))
})

	//update isActive status to true
router.put("/unarchive", (req, res) => {

	courseController.unarchiveCourse(req.body.courseName).then( result => res.send(result))
})


//update isActive status of the course using findByIdAndUpdate()
	//update isActive status to false
router.put("/:courseId/archive", (req, res) => {

	courseController.archiveCourseById(req.params.courseId).then(result => res.send(result))
})

	//update isActive status to true
router.put("/:courseId/unarchive", (req, res) => {

	courseController.unarchiveCourseById(req.params.courseId).then( result => res.send(result))
})


//delete course using findOneAndDelete()
router.delete("/delete-course", (req, res) => {

	courseController.deleteCourse(req.body.courseName).then(result => res.send(result))
})

//delete course using findByIdAndDelete()
router.delete("/:courseId/delete-course", (req, res) => {

	courseController.deleteCourseById(req.params.courseId).then(result => res.send(result))
})



module.exports = router;