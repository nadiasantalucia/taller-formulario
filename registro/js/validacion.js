function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre = document.getElementById("nombre").value;
const apellido = document.getElementById("apellido").value;
const email = document.getElementById("email").value;
const pass1 = document.getElementById("password1").value;
const pass2 = document.getElementById("password2").value;
const check = document.getElementById("terminos");

const btn = document.getElementById("regBtn");

function enviar() {
    if (!nombre || !email || !apellido || !pass1 || !pass2 || !check.checked || pass1.length < 6 || pass1 !== pass2) {
        showAlertError()
        return false;
    }
    showAlertSuccess();
    return true;


}

btn.addEventListener("click", function (event) {
    event.preventDefault();
    enviar()
});


