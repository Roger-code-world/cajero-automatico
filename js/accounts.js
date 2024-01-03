/*******************LOGIN************************ */
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector("#buttton-login");
/******************************************* */
const sectionLogin = document.querySelector("#section-login");
const sectionAuth = document.querySelector('#section-auth');
const sectionAccount = document.querySelector('#section-account');
const sectionOptions = document.querySelector('#section-options');
const content = document.querySelector('.content');
const btnAuth = document.querySelector('#btn-auth');
const btnAdd = document.querySelector('#btn-add');
const btnLogout= document.querySelector('#btn-logout');
const btnWithdraw = document.querySelector('#btn-withdraw');
const btnConsult = document.querySelector('#btn-consult');
const listName = document.querySelector(".accounts")

const passwordCount = document.querySelector("#passwordCount");
const title = document.querySelector("#title");

let getId = 0;
let accountName = "";

let users = [
    {id:1, username:"admin", password:"12345"},
];
let accounts = [
    {id:1, nombre:'Mali', saldo:200, password:"mail"},
    {id:2, nombre:'Gera', saldo:290, password:"gera"},
    {id:3, nombre:'Maui', saldo:67 , password:"maui"},
];

/************************************************************** */
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
            //location.href = "../cuenta/index.html";
            sectionLogin.style.display = "none";
            sectionAccount.style.display = "block";
            title.innerHTML = "";
            title.innerHTML += "Seleccionar una cuenta";
        }
    });
    if(count == 0){
        alert("Error: Las credenciales son incorrectas.");
    }
});
/************************************************************** */

listName.innerHTML = '';
accounts.forEach(element => {
    console.log(element)
    listName.innerHTML += `
    <div class="name">
        <button value="${element.id}" class="btn-name">
            <p>Nombre: ${element.nombre}</p>
        </button>
    </div>
    `;
});

const btnName = document.querySelectorAll(".btn-name");
console.log(btnName);
btnName.forEach(element => {
    console.log(element)
    element.addEventListener("click", (e) => {
        sectionAuth.style.display = "block";
        getId = element.value;
    });
});

btnAuth.addEventListener("click", (e) => {
    const pass = document.getElementById("passwordCount");
    console.log(getId);
    console.log(pass);
    let countAuth = 0;
    accounts.forEach(element => {
        console.log(element);
        if(element.password == pass.value && element.id == getId) {
            console.log("password correcto")
            sectionOptions.style.display = "block";
            sectionAccount.style.display = "none";
            sectionAuth.style.display = "none";
            accountName = element.nombre;
            title.innerHTML = "";
            title.innerHTML += `
                <p>Bienvenido: ${accountName}</p>
            `;
            content.innerHTML = ``;
            content.innerHTML += `
                <p>Bienvenido: ${accountName}</p>
            `;
            countAuth++;
        }
    });
    if(countAuth == 0){
        alert("Error: La contrasena es incorrecta.");
    }
});


btnConsult.addEventListener("click", (e) => {
    let saldo = accounts.find(element => {
        return element.id == getId;
    });
    content.innerHTML = ``;
    content.innerHTML += `
        <label>Saldo disponible</label><br>
        <p style="text-align:center">${saldo.saldo}</p>
    `;
});

btnAdd.addEventListener("click", (e) => {
    content.innerHTML = ``;
    content.innerHTML += `
        <label>Ingresar el monto a retirar</label><br>
        <input type="text" id="show-cant"/>
    `;
});

btnWithdraw.addEventListener("click", (e) => {
    const showCant = document.querySelector('#show-cant');
    let cant = showCant.value;
    if(cant == "") {
        alert("Error. No ha ingresado el monto a retirar");
        return false;
    }
    let saldocurrent = accounts.find(element => {
        return element.id == getId;
    });
    console.log(saldocurrent);
    if(cant > saldocurrent.saldo){
        alert("Saldo insuficiente. Consulta tu saldo.");
        return false;
    }
    let newCant = saldocurrent.saldo - cant;
    if(saldocurrent.saldo <= 10 || newCant <= 10){
        alert("Error. La cuenta debe de tener al menos $10 de saldo. No puedes retirar todo.");
        return false;
    }
    content.innerHTML = ``;
    content.innerHTML += `
        <div>
            <p>Monto retirado: ${cant} </p>
            <p>Nuevo saldo: ${newCant}</p>
        </div>
    `;

    const index = accounts.findIndex(element => {
        return element.id == getId;
    });
    console.log(index);
    accounts[index].saldo = newCant;
});

btnLogout.addEventListener("click", (e) => {
    sectionLogin.style.display = "block";
    sectionOptions.style.display = "none";

    //const showCant = document.querySelector('#show-cant');
    //showCant.value = "";
    passwordCount.value = "";
    username.value = "";
    password.value = "";

    getId = 0;
    accountName = "";
    title.innerHTML = "";
    title.innerHTML += "Iniciar sesion";
});