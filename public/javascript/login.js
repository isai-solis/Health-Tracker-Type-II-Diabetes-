//log in
$("#login-submit").on("click", function(){
	event.preventDefault();
	
	//turn login fields into an object to send to server
	var loginPair = {
		name: $("#user-name").val(),
		password: $("#password").val(),
	}
	//send entry to server for authentication
	var currentURL = window.location.origin;
	$.post("/api/loginauth", loginPair,
	    function(data){

    if (!data.login){
    	alert("User-name/password don't match.")
    	$("#user-name").val("");
			$("#password").val("");
			break;
		}
		else {
			sessionStorage.setItem('userName', name);
			$.get("/", function(data) {
        console.log(data);
      });		
		}
	});
});