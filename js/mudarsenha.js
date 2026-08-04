const btn = document.getElementById("btnAlterar")
const popup = document.getElementById("popup")
const closepopup = document.getElementById("closepopup")
const emailMudarSenha = localStorage.getItem("emailMudarSenha")
const data = JSON.parse(localStorage.getItem("usuarios"))

console.log(emailMudarSenha)

popup.style.display = "none"

btn.addEventListener("click", (e) => {
    e.preventDefault()

    const novasenha = document.getElementById("novasenha").value
    const novasenhaconfirmada = document.getElementById("novasenhaconfirmada").value

    if (novasenha == '' && novasenhaconfirmada == '') {
        return
    }

    if (novasenha !== novasenhaconfirmada) {
        popup.style.display = "block"
        closepopup.addEventListener("click", (e) => {
            e.preventDefault()
            popup.style.display = "none"
        })
        return
    }
    if (novasenha == novasenhaconfirmada) {
        const alterar = data.find(u => u.email == emailMudarSenha)
        if(alterar){
            alterar.senha = novasenha
            localStorage.setItem("usuarios", JSON.stringify(data))
        }
        
        window.location.href = "login.html"
    }
})

