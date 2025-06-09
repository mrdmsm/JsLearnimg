let username;
let password;
document.getElementById("submit").onclick = function() {
    username = document.getElementById("mytext").value;
    password = document.getElementById("mypass").value;
    window.alert(`your username is ${username} and youu password is ${password}`)
    console.log(`his username is ${username} and his password is ${password}`)
}
