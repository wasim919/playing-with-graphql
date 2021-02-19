const { coursesData } = require("../../data")

const getCourse = ({ id }) => {
	return coursesData.filter((ele) => ele.id == id)[0]
}

const getCourses = ({ title }) => {
	if (title) {
		return coursesData.filter((ele) => ele.topic === title)
	} else {
		return coursesData
	}
}

const updateCourseTopic = ({ id, topic }) => {
	coursesData.map((ele) => {
		if (ele.id === id) {
			ele.topic = topic
		}
		return ele
	})
	return coursesData.filter((ele) => ele.id === id)[0]
}

module.exports = { getCourse, getCourses, updateCourseTopic }
