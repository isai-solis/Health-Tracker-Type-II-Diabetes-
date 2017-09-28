// var user = sessionStorage.getItem('userName');

var user = "jsmith";

$("#query-submit").on("click", function(){
	event.preventDefault();

		console.log = $("#time-frame").val()
	var querySubmit = {
		userName: user,
		dataType: $("#data-type").val(),
		time: $("#time-frame").val()
	}
	$.post("/api/datalog", querySubmit,
		function(data){
			
	});
});