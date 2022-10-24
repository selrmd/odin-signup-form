function validateForm(){
    let password = "", confirmPassword = "";

    // listen for and store user password input
    document.getElementById("password").addEventListener("keyup", e => {
        password = e.target.value;

        // show error message if password doesn't match pattern
        checkValidPassword(password, confirmPassword);
        // show error message if password doesn't match the confirmed password
        comparePasswords(password, confirmPassword);
    });

    // lister for and store user confirmed password input
    document.getElementById("confirm-pass").addEventListener("keyup", e => {
        confirmPassword = e.target.value;

        // show error message if password doesn't match pattern
        checkValidPassword(password, confirmPassword);
        // show error message if password doesn't match pattern
        comparePasswords(password, confirmPassword);
    });

}

// compare the two passwords and display an error if they don't match
function comparePasswords(password, confirmPassword){

    if(password !== "" && confirmPassword === "" || password === "" && confirmPassword !== ""){
        // if user starts typing password while the other field is empty
        // do nothing
    } else if(password !== confirmPassword){
        document.getElementById("confirm-pass").parentElement.classList.add("error");
    } else {
        document.getElementById("confirm-pass").parentElement.classList.remove("error");
    }
}

// display error message if password pattern doesn't match user input
function checkValidPassword(password, confirmPassword){

    // both fields are empty, no warning
    if(password === "" && confirmPassword === ""){
        document.querySelector("#account-info > p").style.display = "none";
    } 
    // check first password validity when password field isn't empty
    else if(!document.getElementById("password").checkValidity() && password !== ""){
        document.querySelector("#account-info > p").style.display = "inherit";
    } 
    // check confirmed password validity
    else if(!document.getElementById("confirm-pass").checkValidity() && (password === "" || confirmPassword !== "")){
        document.querySelector("#account-info > p").style.display = "inherit";
    } 
    // hide warning when password matches the pattern
    else {
        document.querySelector("#account-info > p").style.display = "none";
    }

}

// run password validation
validateForm();