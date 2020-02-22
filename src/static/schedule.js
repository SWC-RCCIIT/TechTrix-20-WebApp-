import firebase from './firebase'

//robotics
const roboref = firebase.database().ref();
roboref.update(
	{
		"Verbose" : {
			"fee" : 100,
			"intro" : "Robo soccer confronts the sheer and intensified tryst of the football lovers with robomaniacs. The love for the game just got technically amplified with the circuits and steel fighting for the precious prize. Infiltrate your robot with the soccer skill, it just might be the striker you need.",
			"intropoints" : [ "<b>Contact : </b> +91 72890 17595 (Ayush Pranav)" ],
			"ps" : "",
			"rules1" : [ "Each round will last for 2 minutes.", "Maximum participants per team = 3.", "Robots must be manually controlled.", "Bots should not use more than 12v power supply and only one supply for whole system. You cannot use parallel batteries for generating higher power.", "No bot can remain inactive for more than 1 min in arena exceeding which will result in disqualification. By in-activity we mean-not able to take open ball to opponent's half.", "If your bot is designed for capturing that ball then you can do so for not more than 5 sec. And interval between successive captures must be 10 secs.", "No physical intervention in the arena would be tolerated. This would lead to direct disqualification.", "Bots should be controlled be designated controller/manual switching and not by physical pushing or pulling.", "Any kind of weapon that are intentionally added to harm the opponent would not be accepted.", "1Dimensions of bot must follow below mentioned criteria-(30cm x 30cm x 15cm)", "Weight of bot is limited to 1kg + 0.2kg. Weight of external power source would not be considered in weight of bot.", "1Organisers are bound to disqualify any team breaking the rules." ],
			"team" : 3,
			"win" : "The team scoring the maximum goals in a round will win that round."
		  }
		  

	}
)


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
