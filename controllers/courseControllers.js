
const Course = require("./../models/Course");

module.exports.createCourse = (reqBody) => {
	let newCourse = new Course({
		courseName: reqBody.courseName,
		description: reqBody.description,
		price: reqBody.price
	})

	return newCourse.save().then( (result, error) => {
		if(error){
			return false
		} else {
			return true
		}
	})
}

module.exports.getAllCourses = () => {

	return Course.find().then( (result, error) => {
		if(error){
			return false
		} else {
			return result
		}
	})
}


module.exports.getActiveCourses = () => {
	return Course.find({isActive: true}).then((result, err) => {
		if(err) {
			return false
		} else {
			return result
		}
	})
}