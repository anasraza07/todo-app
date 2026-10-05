import { auth, signInWithEmailAndPassword } from "./firebase-init.js"

var email = document.getElementById("email")
var password = document.getElementById("password")
var loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", function () {
    if (!email.value || !password.value) {
        alert("Both fields are required!")
        return;
    }

    // var user = {
    //     email: email.value,
    //     password: password.value
    // }

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("login successful:", user)

            email.value = ""
            password.value = ""

            window.location.replace("./todos.html")

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("errorCode:", errorCode)
            console.log("errorMessage:", errorMessage)
        });
})