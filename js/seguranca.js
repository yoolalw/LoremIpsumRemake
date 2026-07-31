const container = document.querySelector("#container")

container.insertAdjacentHTML('beforeend', `
    <h2 id="pergunta" class="font-serif text-[30px] text-[#4e6580] mb-3">Como se deve utilizar o 
protetor auricular? </h2>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_errada"><input class=" p-4 w-[70px]" type="radio" id="resposta_errada" value="errado">No pescoço</label>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_certa"><input class=" p-4 w-[70px]" type="radio" id="resposta_certa" value="certo">No ouvido</label>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_errada2" ><input class=" p-4 w-[70px]" type="radio" id="resposta_errada2" value="errado">Na nuca</label>
`
)
document.addEventListener("click", (e) => {
    e.preventDefault()
    const errada = document.querySelector("#resposta_errada")
    const errada2 = document.getElementById("resposta_errada2")
    const certa = document.getElementById("resposta_certa")
    errada.addEventListener("click", (e) => {
        e.preventDefault()
        errada.style.borderColor = "red"

    })
    errada2.addEventListener("click", (e) => {
        e.preventDefault()

        errada2.style.borderColor = "red"
    })
    certa.addEventListener("click", (e) => {
        e.preventDefault()

        certa.style.borderColor = "green"

    })
})