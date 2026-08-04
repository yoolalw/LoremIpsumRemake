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
const img = localStorage.getItem("img")

const img_pessoa = document.createElement("img")
img_pessoa.src = img
img_pessoa.className = "rounded-full size-[100px]"
const header = document.getElementById("header")
header.appendChild(img_pessoa)