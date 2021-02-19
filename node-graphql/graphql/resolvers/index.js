const { getCourse, getCourses, updateCourseTopic } = require("./controllers")

const root = {
	course: getCourse,
	courses: getCourses,
	updateCourseTopic: updateCourseTopic
}

module.exports = { root }
