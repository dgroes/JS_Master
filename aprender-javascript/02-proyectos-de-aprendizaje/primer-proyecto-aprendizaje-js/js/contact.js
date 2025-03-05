window.addEventListener("load", () => {

    const validation = new JustValidate(".main__contact");
    let isValidate = false;

    validation
        .addField("#name", [
            {
                rule: "required",
                errorMessage: "El nombre es obligatorio",
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "El nombre es muy corto",
            },
            {
                rule: "maxLength",
                value: 15,
                errorMessage: "El nombre es demasiado largo",
            }
        ])
        .addField("#surname", [
            {
                rule: "required",
                errorMessage: "El apellido es obligatorio",
            },
            {
                rule: "minLength",
                value: 3,
                errorMessage: "Los apellidos son muy cortos",
            },
            {
                rule: "maxLength",
                value: 30,
                errorMessage: "Los apellidos son muy largos 😺",
            }
        ])
        .addField("#email", [
            {
                rule: "required",
                errorMessage: "El email es obligatorio",
            },
            {
                rule: "email",
                errorMessage: "El email no es valido ✋",
            },
        ])
        .addField("#gender", [
            {
                rule: "required",
                errorMessage: "Selecciona un genero ⚧️",
            },
            
        ])
        .addField("#date", [
            {
                rule: "required",
                errorMessage: "La fecha de nacimiento es obligatoria 📅",
            },
            
        ])
        .addField("#age", [
            {
                rule: "required",
                errorMessage: "La edad es obligatoria 🧙‍♂️",
            },
            {
                rule: "integer",
                errorMessage: "Solo es valido los números 9️⃣",
            },
        ])
        .onSuccess(() => {
            isValidate = true;
            alert("Todo es valido");
        })

});