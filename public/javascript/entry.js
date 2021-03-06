// var user = sessionStorage.getItem('userName');
var user = "jsmith";

if (user == null){
	console.log("you messed up");

}

console.log("user = " + user);

//buttons for displaying each type of entry form
$("#meal-entry").on("click", function(){
	$("#sugar-form").css("display", "none");
	$("#insulin-form").css("display", "none");
	$("#activity-form").css("display", "none");
	$("#meal-form").css("display", "block");
});
$("#sugar-entry").on("click", function(){
	$("#meal-form").css("display", "none");
	$("#insulin-form").css("display", "none");
	$("#activity-form").css("display", "none");
	$("#sugar-form").css("display", "block");
});
$("#insulin-entry").on("click", function(){
	$("#sugar-form").css("display", "none");
	$("#meal-form").css("display", "none");
	$("#activity-form").css("display", "none");
	$("#insulin-form").css("display", "block");
});
$("#activity-entry").on("click", function(){
	$("#sugar-form").css("display", "none");
	$("#insulin-form").css("display", "none");
	$("#meal-form").css("display", "none");
	$("#activity-form").css("display", "block");
});

$("#meal-submit").on("click", function(){
	var dataSubmit = {
		userName: user,
		food: $("#food").val(),
		carbs: $("#carbs").val(),
		date: Date.parse($("#meal-date").val() + " " + $("#meal-time").val())
	}
	console.log("entry.js ------------------");
	console.log(dataSubmit);
	$.post("/api/meals", dataSubmit,
		function(data){
			$("#food").val("");
			$("#carbs").val("");
			$("#meal-time").val("");
			$("#meal-form").css("display", "none");
	});
});

$("#sugar-submit").on("click", function(){
	var dataSubmit = {
		userName: user,
		glucose: $("#glucose").val(),
		time: Date.parse($("#glucose-date").val() + " " + $("#glucose-time").val())
	}
	console.log(dataSubmit);
	$.post("/api/glucose", dataSubmit,
		function(data){
			if (data.logged){
				$("#glucose").val("");
				$("#glucose-time").val("");
				$("#sugar-form").css("display", "none");
			}
			else{
				
				$("#glucose").val("");
				$("#glucose-time").val("");
			}
	});
});

$("#insulin-submit").on("click", function(){
	var dataSubmit = {
		userName: user,
		units: $("#insulin-units").val(),
		type: $("#insulin-type").val(),
		time: Date.parse($("#insulin-date").val() + " " + $("#insulin-time").val())
	}
	console.log(dataSubmit);
	$.post("/api/insulin", dataSubmit,
		function(data){
			if (data.logged){
			
				$("#insulin-units").val("");
				$("#insulin-type").val("");
				$("insulin-time").val("");
				$("#insulin-form").css("display", "none");
			}
			else{
			
				$("#insulin-units").val("");
				$("#insulin-time").val("");
				$("#insulin-type").val("");
			}
	});
});

$("#activity-submit").on("click", function(){
	var dataSubmit = {
		userName: user,
		activity: $("#activity").val(),
		mood: $("#mood").val(),
		duration: $("#duration").val(), 
		time: Date.parse($("#activity-date").val() + " " + $("#activity-time").val())
	}
	console.log(dataSubmit);
	$.post("/api/activity", dataSubmit,
		function(data){
			if (data.logged){
				
				$("#activity").val("");
				$("#mood").val("");
				$("#duration").val("");
				$("#activity-time").val("");
				$("#activity-form").css("display", "none");
			}
			else{
				
				$("#activity").val("");
				$("#mood").val("");
				$("#duration").val("");
				$("#activity-time").val("");
			}
	});
});