$(document).ready(function(){
    var name = $("#author_name");
    var birthDate = $("#birthDate");
    var email = $("#email");
    var gender = $("#gender");
    var weight = $("#weight");
    var height = $("#height");
    var userName = $("#userName");
    var password = $("#password");

    $(document).on("submit", "#author-form", userFormSubmit);
    $(document).on("click", ".delete-author", handleDeleteButtonPress);
    
        // A function to handle what happens when the form is submitted to create a new Author
    function userFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name fields hasn't been filled out
        if ((!name.val().trim().trim()) || (!birthDate.val().trim().trim()) || (!email.val().trim().trim()) || (!gender.val().trim().trim()) || (!weight.val().trim().trim()) || (!height.val().trim().trim()) ||(!userName.val().trim().trim()) || (!password.val().trim().trim())) {
        return;
        }
        // Calling the upsertAuthor function and passing in the value of the name input
        upsertUser({
            name: nameInput
                .val()
                .trim()
            },
            {
            birthDate: birthDate
                .val()
                .trim()
            },
            {
            email: email
                .val()
                .trim()
            },
            {
            gender: gender
                .val()
                .trim()
            },        
            {
            weight: weight
                .val()
                .trim()
            },
            {
            height: height
                .val()
                .trim()
            },
            {
            userName: userName
                .val()
                .trim()
            },
            {
            password: password
                .val()
                .trim()
            }
        );
    };

    // A function for creating an author. Calls getAuthors upon completion
    function upsertUser(userData) {
        $.post("/api/userInfo", userData)
        .then(getUser);
        console.log(getUser);
    };

});