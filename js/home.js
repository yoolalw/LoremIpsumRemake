function seguranca(){
    window.location.href = "seguranca.html"
}
function inteligencia(){
    window.location.href = "inteligencia.html"
}

function login(){
    localStorage.clear()
    window.location.href = "login.html"

}

const nome = localStorage.getItem("nome")
const nomeUsuario = document.getElementById("nomeUsuario")
nomeUsuario.textContent = `Seja bem-vindo, ${nome}!`