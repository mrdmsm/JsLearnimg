// let age = window.prompt("enter your age ")
// age = Number()

// age +=1;

// age=age+1;
let username;
let password;
document.getElementById("submit").onclick = function() {
    username = document.getElementById("mytext").value;
    password = document.getElementById("mypass").value;
    window.alert(`your username is ${username} and youu password is ${password}`)
}


