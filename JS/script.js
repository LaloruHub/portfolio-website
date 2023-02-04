window.onload = CargarEventos;

function CargarEventos() {

    const INPUT = Array.from(document.getElementsByClassName("validar"));
    INPUT.forEach(input => {
        input.addEventListener('blur', ValidarContacto);
    });

    pagina();
}

// Validaciones
function ValidarContacto(event) {
    let field = event.target;

    if (!field.validity.valueMissing) {
        if (!field.validity.patternMismatch) {
            Error(field, "green", field.id + "Label");
        } else Error(field, "red", field.id + "Label");
    } else Error(field, "red", field.id + "Label");
}

// field.style.borderBottom = "1px solid green";
//field.style.borderBottom = "1px solid red";

function Error(field, color, label) {
    console.log("🚀 ~ file: script.js ~ line 34 ~ Error ~ label", label);
    field.style.borderBottom = "1px solid " + color;
    color == "green" ? color = "black" : null;

    document.getElementById(label).style.color = color;
}

function pagina() {
    switch (window.location.pathname) {
        case "/index.html":
            break;
        case "/projects.html":
            cambiarColorBoton("projects", "#333333", "white");
            break;

        case "/curriculumv.html":
            cambiarColorBoton("curriculumv", "#333333", "white");
            break;

        case "/contact.html":
            cambiarColorBoton("contact", "#333333", "white");
            break;

        case "/aboutme.html":
            cambiarColorBoton("aboutme", "#333333", "white");
            break;

    }
}

function cambiarColorBoton(btnID, bgColor, txtColor) {
    const BTN = document.getElementById(btnID);
    BTN.style.backgroundColor = bgColor;
    BTN.style.color = txtColor;
}