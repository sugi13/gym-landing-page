let Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let EmailField = document.getElementById("Email-field");
let RegisterButton = document.getElementById("register-btn")


function Validate() {
    if(EmailField.value == ""){
        alert("Please enter a email address");
    }
    else if(EmailField.value.match(Regex)){
        alert("Thank You for registering")
    }
    else {
       console.log("something went wrong");
    }
}

RegisterButton.addEventListener("click", Validate)