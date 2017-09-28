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
	$.post(currentURL + "/api/loginauth", loginPair,
	    function(data){

    if (!data.login){
    	alert("User-name/password don't match.")
    	$("#user-name").val("");
			$("#password").val("");
			break;
		}
		else {
			sessionStorage.setItem('userName', name);
			$("#entry-page").css("display", "block");
			$("#greeting").html("Welcome " + user);			
		}
	});
});












<script>


.then(if profile successful)

sessionStorage.setItem('userName', $("#userName").val())

</scipt>