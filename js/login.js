const username = document.querySelector("#username");
const password = document.querySelector("#password");
let users = [
    {id:1, username:"admin", password:"12345"},
];
const btn = document.querySelector("#buttton-login");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(username.value == "" || password.value == ""){
        alert("Error: Los campos estan vaciones");
        return false;
    }
    let = count = 0;
    users.forEach(element => {
        if(element.username == username.value && element.password == password.value){
            count++;
            location.href = "../cuenta/index.html";
        }
    });
    if(count == 0){
        alert("Error: Las credenciales son incorrectas.");
    }
});


