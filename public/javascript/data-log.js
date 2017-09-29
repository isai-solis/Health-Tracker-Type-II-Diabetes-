// var user = sessionStorage.getItem('userName');

var user = "jsmith";

$("#query-submit").on("click", function(){
	event.preventDefault();

		console.log($("#time-frame").val());
	var querySubmit = {
		userName: user,
		dataType: $("#data-type").val(),
		time: $("#time-frame").val()
	}
	$.post("/api/datalog", querySubmit,function(data){
		
		if (querySubmit.dataType == "insulin"){
		    var table = "";
		    for(var i=0; i<data.key.length; i++){
		        table += "<span>Units Administered: ";
		        table += data.key[i].dataUnits;
		        table += " | Type: ";
		        table += data.key[i].dataKins;
		        table += " | Time Taken(unix): ";
		        table += data.key[i].dataTimeTaken
		        table += "</span><br>"
		    };
		    $("#data-display").html(table);
		}
		else if (querySubmit.dataType == "activity "){
		    var table = "";
		    for(var i=0; i<data.key.length; i++){
		        table += "<span>Level of Activity: ";
		        table += data.key[i].dataLevel;
		        table += " | Current Mood: ";
		        table += data.key[i].dataMood;
		        table += " | Activity Duration: ";
		        table += data.key[i].dataTimeDuration;
		            table += " | Time of Activity (unix): ";
		        table += data.key[i].dataActivityTime
		        table += "</span><br>"
		    };
		    $("#data-display").html(table);
		}
		else if (querySubmit.dataType == "bloodSugarM"){
		    var table = "";
		    for(var i=0; i<data.key.length; i++){
		        table += "<span>mg/Dl: ";
		        table += data.key[i].datamgDl;
		        table += " | Time of Measurment: ";
		        table += data.key[i].dataTimeOfM;
		        table += "</span><br>"
		    };
		    $("#data-display").html(table);
		}
		else if (querySubmit.dataType == "meals"){
		    var table = "";
		    for(var i=0; i<data.key.length; i++){
		        table += "<span>Meal: ";
		        table += data.key[i].dataMeal;
		        table += " | Carbs: ";
		        table += data.key[i].dataCarbs;
		        table += " | Time Eaten: ";
		        table += data.key[i].dataTimeEaten;
		        table += "</span><br>"
		    };
		    $("#data-display").html(table);
		}
	});
});