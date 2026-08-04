const btn = document.getElementById("btn_login")
const msg = document.getElementById("msg")
const msgDiv = document.getElementById("msgDiv")
const fetchToDo = "./data.json"
const blockedValue = sessionStorage.getItem("blocked")


let timer = 16
let cont = 0
msg.style.display = "none"
msgDiv.style.display = "none"

async function savingData() {
    if (!localStorage.getItem('usuarios')) {
        const respose = await fetch(fetchToDo)
        const data = await respose.json()
        localStorage.setItem("usuarios", JSON.stringify(data))
    }
}
savingData()

const data = JSON.parse(localStorage.getItem("usuarios"))

console.log(data);
console.log(JSON.parse(localStorage.getItem("usuarios")))

if (blockedValue) {
    btn.disabled = true
    msgDiv.style.display = "none"
    msg.style.display = "none"
    btn.className = "mt-4 h-[40px] w-[340px] rounded-xl text-white font-serif bg-gray-300"
} else {
    btn.addEventListener("click",  (e) => {
        e.preventDefault()
        cont++

        const email = document.getElementById("email").value
        const senha = document.getElementById("senha").value

        console.log(data)


        const usuario_ativo = data.find(u => u.email === email)

        if (!usuario_ativo) {
            msgDiv.style.display = "block"
            msg.style.display = "block"
            console.log("Usuario inexistente.")
            if (cont == 3) {
                console.log(cont)
                btn.disabled = true
                btn.className = "mt-4 h-[40px] w-[340px] rounded-xl text-white font-serif bg-gray-300"
                if (btn.disabled) {
                    setInterval(() => {
                        if (timer > 0) {
                            timer--
                            msg.textContent = `Tente novamente em ${timer} segundos.`
                        }
                        if (timer == 0) {
                            msgDiv.style.display = "none"
                            msg.style.display = "none"
                            btn.disabled = false
                            btn.className = 'mt-4 h-[40px] w-[340px] rounded-xl text-white font-serif hover:bg-blue-800 cursor-pointer bg-[#2e537d]'
                        }
                    }, 1000)
                }

            }
            return
        }
        if (usuario_ativo.senha !== senha) {
            msgDiv.style.display = "block"
            msg.textContent = "Senha incorreta."
            msg.style.display = "block"
            console.log("senha incorreta")
            if (cont == 3) {
                btn.disabled = true
                btn.className = "mt-4 h-[40px] w-[340px] rounded-xl text-white font-serif bg-gray-300"
                sessionStorage.setItem("blocked", true)
            }
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
}


function sobre() {
    window.location.href = "sobre.html"
}

