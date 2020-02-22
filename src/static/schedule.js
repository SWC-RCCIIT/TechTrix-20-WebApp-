// import firebase from './firebase'

// //robotics
// const roboref = firebase.database().ref();
// roboref.update(
// 	{
// 		"Score It" : {
// 			"fee" : 0,
// 			"intro" : "test",
// 			"intropoints" : ["test","test"],
// 			"ps" : "",
// 			"rules1" : [ "test"],
// 			"team" : 0,
// 			"win" : "",
// 			"rules2" : ""
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
