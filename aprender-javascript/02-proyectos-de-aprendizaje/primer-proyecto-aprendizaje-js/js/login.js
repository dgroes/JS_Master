let loginForm = document.querySelector(".aside__login");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#pass");
let asideData = document.querySelector(".aside__data");
let loginName = document.querySelector(".data__name");
let btnLogout = document.querySelector(".data__logout");

let getUser = () => {
    let myUser = localStorage.getItem("user");

    if (localStorage.getItem("user")) {
        let identity = JSON.parse(myUser);

        loginName.innerHTML = identity.name;
        loginForm.classList.add("aside__login--hide");
        asideData.classList.remove("aside__data--hide");


    }
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //Recoger los valores del formulario
    let name = inputName.value
    let email = inputEmail.value
    let password = inputPassword.value

    //Comprovar que todo está relleneo
    let user = {};
    if (name && email && password) {

        //Guardar los datos en un objeto
        user = { name, email, password };

        //Guardar en el LocalStorage
        localStorage.setItem("user", JSON.stringify(user));

        //Vaciar el fomrulario
        loginForm.reset();

        //Mostrar el usuario
        getUser();

    }

})


 //Mostrar el usuario
 getUser();


 //Logout
 btnLogout.addEventListener("click", () => {
    localStorage.clear();
    loginForm.classList.remove("aside__login--hide");
    asideData.classList.add("aside__data--hide")
 })