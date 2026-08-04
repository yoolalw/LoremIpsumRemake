const btn = document.getElementById("btn")
const file = "./data.json"
const msg = document.getElementById("msg")
const perg = document.querySelector("#divPergunta")
perg.style.display = "none"
const popup = document.getElementById("popup")
const closepopup = document.getElementById("closepopup")
const textpopup = document.getElementById("textpopup")
popup.style.display = "none"

btn.addEventListener("click", (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value

    const data = JSON.parse(localStorage.getItem("usuarios"))
    console.log(data)
    const validado = data.find(u => u.email === email)
    if (!validado) {
        popUp("Este email nao existe")
    }

    if (validado) {
        perg.style.display = "block"
        const pergunta = document.getElementById("pergunta")
        pergunta.textContent = validado.pergunta
        const btnEnviar = document.getElementById("enviar")

        btnEnviar.addEventListener("click", (e) => {
            e.preventDefault()
            const resposta = document.getElementById("resposta").value

            if (validado.resposta === resposta) {
                localStorage.setItem("emailMudarSenha", email)
                console.log("acertou")
                console.log(email)
                setTimeout(() => {
                    window.location.href = "mudarsenha.html"
                }, 2000)
            }
            else {
                popUp("Resposta incorreta.")
            }
        })
    }
})

function popUp(text) {
    popup.style.display = "block"
    closepopup.addEventListener('click', (e) => {
        textpopup.textContent = text
        e.preventDefault()
        popup.style.display = 'none'
    })
}