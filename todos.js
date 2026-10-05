import { auth, onAuthStateChanged, database, ref, set } from "./firebase-init.js";

var input = document.querySelector("input")
var addTodo = document.querySelector("button")

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log(user)
        // ...
    } else {
        // User is signed out
        // ...
    }
});

addTodo.addEventListener("click", function () {
    if (!input.value) {
        alert("Please write something");
        return;
    }

    writeUserData(uid, input.value)
})

function writeUserData(userId, todo) {
    const db = database
    set(ref(db, 'todos/' + userId), {
        todoItem: todo,
    });
}