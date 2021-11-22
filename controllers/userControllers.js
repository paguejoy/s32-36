
const User = require("./../models/User");


module.exports.checkEmail = (reqBody) => {
	const {email} = reqBody

	return User.findOne({email: email}).then( (result, error) => {
		// console.log(email)
		if(result != null){
			return `Email already exists`
		} else {
			console.log(result)	//null bec email does not exist
			if(result == null){
				return true
			} else {
				return error
			}
		}
	})
}


module.exports.register = (reqBody) => {

	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		email: reqBody.email,
		password: reqBody.password,
		mobileNo: reqBody.mobileNo
	})
	//save()
	return newUser.save().then( (result, error) => {
		if(result){
			return true
		} else {
			return error
		}
	})
}

module.exports.getAllUsers = () => {

	return User.find().then( (result, error) => {
		if(result){
			return result
		} else {
			return error
		}
	})
}