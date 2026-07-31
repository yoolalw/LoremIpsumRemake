const btn = document.getElementById("btn_login")
const msg = document.getElementById("msg")
const fetchToDo = "./data.json"
msg.style.display = "none"

btn.addEventListener("click", async (e) => {
    e.preventDefault()


    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const respose = await fetch(fetchToDo)
    const data = await respose.json()
    const usuario_ativo = data.find(u => u.email === email)
    if (!usuario_ativo) {
        msg.style.display = "block"
        console.log("Usuario inexistente.")
        return
    }
    if (usuario_ativo.senha !== senha) {
        msg.textContent = "Senha incorreta."
        msg.style.display = "block"
        console.log("senha incorreta")
        return
    }

    if (usuario_ativo.email === email && usuario_ativo.senha === senha) {
        msg.style.display = "none"
        console.log("Existe, login realizado")
        localStorage.setItem("token", usuario_ativo.token)
        localStorage.setItem("nome", usuario_ativo.nome)
    }

})

function sobre(){
    window.location.href = "sobre.html"
}