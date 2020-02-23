// import firebase from './firebase'

// //robotics
// const roboref = firebase.database().ref();
// roboref.update(
// 	{
// 		"Obedient Orbiter" : {
// 			"fee" : "TBA",
// 			"intro" : "",
// 			"intropoints" : [ "<b>Contact : </b> " ],
// 			"rules1" : [ "TBD" ],
// 			"team" : 5,
// 			"win" : "TBD"
// 		  },
// 		  "Escape Velocity Autonomous" : {
// 			"fee" : "TBD",
// 			"intro" : "",
// 			"intropoints" : [ "<b>Contact : </b>" ],
// 			"rules1" : [ "TBD" ],
// 			"team" : 5,
// 			"win" : "TBD"
// 		  },
// 	}
// )


const Db = {
	"day1": [
		{
			"tit": "10:00AM - 10:30PM",
			"des": "Opening Ceremony",
			"loc": "Auditorium"
		},
		{
			"tit": "11:30 AM-12:30 PM",
			"des": "session",
			"loc": "Auditorium"
		}
	],
	"day2": [
		{
			"tit": "9:30AM - 10:30AM",
			"des": "Codes",
			"loc": "LAB"
		},
		{
			"tit": "10:30AM - 11:30AM",
			"des": "Guest Lecture",
			"loc": "Auditorium"
		},
		
	]

}
export default Db; 
