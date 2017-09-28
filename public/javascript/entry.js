var user = sessionStorage.getItem('userName');
// if (user == null){
// 	$.get(currentURL + "/login"
// }
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
		time: $("#meal-time").val(),
		date: $("#meal-date").val()
	}
	console.log(dataSubmit);
	$.post(currentURL + "/api/meal", dataSubmit,
		function(data){
			if (data.logged){
				logSuccess();
				$("#food").val("");
				$("#carbs").val("");
				$("#meal-time").val("");
				$("#meal-form").css("display", "none");
			}
			else{
				logError();
				$("#food").val("");
				$("#carbs").val("");
				$("#meal-time").val("");
			}
	});
});

$("#sugar-submit").on("click", function(){
	var dataSubmit = {
		userName: user,
		glucose: $("#glucose").val(),
		time: $("#glucose-time").val()
	}
	console.log(dataSubmit);
	$.post(currentURL + "/api/glucose", dataSubmit,
		function(data){
			if (data.logged){
				logSuccess();
				$("#glucose").val("");
				$("#glucose-time").val("");
				$("#sugar-form").css("display", "none");
			}
			else{
				logError();
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
		time: $("#insulin-time").val()
	}
	console.log(dataSubmit);
	$.post(currentURL + "/api/insulin", dataSubmit,
		function(data){
			if (data.logged){
				logSuccess();
				$("#insulin-units").val("");
				$("#insulin-type").val("");
				$("insulin-time").val("");
				$("#insulin-form").css("display", "none");
			}
			else{
				logError();
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
		time: $("#activity-time").val()
	}
	console.log(dataSubmit);
	$.post(currentURL + "/api/activity", dataSubmit,
		function(data){
			if (data.logged){
				logSuccess();
				$("#activity").val("");
				$("#mood").val("");
				$("#duration").val("");
				$("#activity-time").val("");
				$("#activity-form").css("display", "none");
			}
			else{
				logError();
				$("#activity").val("");
				$("#mood").val("");
				$("#duration").val("");
				$("#activity-time").val("");
			}
	});
});