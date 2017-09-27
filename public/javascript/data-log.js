var user = sessionStorage.getItem('userName');

$("#query-submit").on("click", function(){
	event.preventDefault();

		console.log = $("#time-frame").val()
		
	var querySubmit = {
		user: user,
		dataType: $("#data-type").val(),
		time: $("#time-frame").val()
	}
	$.post(currentURL + "/api/dbquery", querySubmit,
		function(data){
			console.log(data);
	});
});