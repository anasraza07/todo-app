import { auth, createUserWithEmailAndPassword } from "./firebase-init.js"

var fullName = document.getElementById("full-name")
var email = document.getElementById("email")
var password = document.getElementById("password")
var signUpBtn = document.querySelector("button")

signUpBtn.addEventListener("click", function () {
    if (!fullName.value || !email.value || !password.value) {
        alert("All fields are required!")
        return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            console.log("login successful", user)
            fullName.value = ""
            email.value = ""
            password.value = ""

            window.location.replace("./login.html")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ": " + errorMessage)
        });
})