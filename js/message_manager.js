function ShowMessage(string_notification, game_over){
	ResetTime();

	Next_Level = !game_over;

	if (game_over == false){
		string_score = "Level " + Level + " | Time ";
		if (Total_mins < 10) string_score = string_score + "0";
		string_score = string_score + Total_mins + ":";
		if (Total_secs < 10) string_score = string_score + "0";
		string_score = string_score + Total_secs;

	}
	else{
		string_score = "Score: " + (Level_Moves-Moves) + "/" + Level_Moves;
	}

	Message = document.getElementById("message");
	Message.style.display = "block";

	Message_Notification = document.getElementById("notification");
	Message_Notification.innerHTML = string_notification;

	Message_Notification = document.getElementById("data_message");
	Message_Notification.innerHTML = string_score;
}

function ShowWelcome() {
	Message = document.getElementById("message");
	Message.style.display = "block";

	Message_Notification = document.getElementById("notification");
	Message_Notification.innerHTML = "Level: " + Level;

	Message_Notification = document.getElementById("data_message");
	Message_Notification.innerHTML = "Lifes: " + Lifes;

	Message_Notification = document.getElementById("share_panel");
	Message_Notification.display.style = "none";

	document.getElementById("seconds").innerHTML = "00";
	document.getElementById("minutes").innerHTML = "00";
}