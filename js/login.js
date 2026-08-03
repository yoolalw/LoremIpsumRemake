const btn = document.getElementById("btn_login")
const msg = document.getElementById("msg")
const msgDiv = document.getElementById("msgDiv")
const fetchToDo = "./data.json"
let cont = 0
msg.style.display = "none"
msgDiv.style.display = "none"
btn.addEventListener("click", async (e) => {
    e.preventDefault()
    cont++    

    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const respose = await fetch(fetchToDo)
    const data = await respose.json()
    const usuario_ativo = data.find(u => u.email === email)
    if (!usuario_ativo) {
        msgDiv.style.display = "block"
        msg.style.display = "block"
        console.log("Usuario inexistente.")
        if(cont == 3){
            console.log(cont)
            btn.disabled = true
            btn.className = "mt-4 h-[40px] w-[340px] rounded-xl text-white font-serif bg-gray-300"
            msg.textContent = "Tente novamente em 15 segundos."
        }   
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
        window.location.href = "home.html"
    }

})

function sobre(){
    window.location.href = "sobre.html"
}