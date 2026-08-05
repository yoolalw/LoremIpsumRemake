const container = document.querySelector("#container")
const timer = document.getElementById("timer")

const pontos = document.getElementById("pontos")
const somaPontos = 0

function home(){
    window.location.href = "home.html"
}

function login() {
    window.location.href = "login.html"
    localStorage.clear()
}

function soma(quantidade) {
    total =  quantidade += somaPontos
    if(quantidade < 0 ){
        total = quantidade -= somaPontos
    }
    pontos.textContent = `Pontos: ${total}`
}

function reg(){
    let time = 16
    timer.textContent = ''
    setInterval(() => {
        if(time>0){
            time--
            timer.textContent = time
        }
        if(time==0){
            timer.textContent = "Tempo esgotado."
        
        }
    }, 1000)
} 
reg()


container.insertAdjacentHTML('beforeend', `
    <h2 id="pergunta" class="font-serif text-[30px] text-[#4e6580] mb-3">Caso alguém faça uma 
brincadeira ofensiva com 
um colega, devemos: </h2>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_errada"><input class=" p-4 w-[70px]" type="radio" id="resposta_errada" value="errado">Partir para a briga </label>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_certa"><input class=" p-4 w-[70px]" type="radio" id="resposta_certa" value="certo">Primeiramente conversar sobre o ocorrido </label>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_errada2" ><input class=" p-4 w-[70px]" type="radio" id="resposta_errada2" value="errado">Chamar a polícia </label>
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

        soma(-5)
    })
    errada2.addEventListener("click", (e) => {
        e.preventDefault()

        errada2.style.borderColor = "red"
        soma(-5)
    })
    certa.addEventListener("click", (e) => {
        e.preventDefault()

        soma(10)
        certa.style.borderColor = "green"

        container.innerHTML = ``

        container.insertAdjacentHTML('beforeend', `
               <h2 id="pergunta" class="font-serif text-[30px] text-[#4e6580] mb-3">Quais alternativa que 
mostra apenas assuntos 
sensíveis e devem ser 
evitados em ambiente de 
trabalho?</h2>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_errada"><input class=" p-4 w-[70px]" type="radio" id="resposta_errada" value="errado">Notícias, esportes e games</label>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_errada2"><input class=" p-4 w-[70px]" type="radio" id="resposta_errada2" value="errado">Churrasco, café e religião 
</label>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_certa" ><input class=" p-4 w-[70px]" type="radio" id="resposta_certa" value="certo">Política, religião e futebol </label> 
            `)
        timer.textContent = ""
        reg()
        const errada = document.querySelector("#resposta_errada")
        const errada2 = document.getElementById("resposta_errada2")
        const certa2 = document.getElementById("resposta_certa")
        errada.addEventListener("click", (e) => {
            e.preventDefault()
            errada.style.borderColor = "red"
            
        })
        errada2.addEventListener("click", (e) => {
            e.preventDefault()

            errada2.style.borderColor = "red"
        })

        certa2.addEventListener("click", (e) => {
            e.preventDefault()

            certa2.style.borderColor = "green"

            container.innerHTML = ``

            container.insertAdjacentHTML('beforeend', `
    <h2 id="pergunta" class="font-serif text-[30px] text-[#4e6580] mb-3">A faixa zebrada serve 
para: </h2>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_errada"><input class=" p-4 w-[70px]" type="radio" id="resposta_errada" value="errado">Marcar golzinho na rua</label>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_certa"><input class=" p-4 w-[70px]" type="radio" id="resposta_certa" value="certo">Delimitar uma área restrita</label>
    <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl" id="resposta_errada2" ><input class=" p-4 w-[70px]" type="radio" id="resposta_errada2" value="errado">Amarrar o cachorro</label>
`
            )

            const errada = document.querySelector("#resposta_errada")
            const errada2 = document.getElementById("resposta_errada2")
            const certa3 = document.getElementById("resposta_certa")
            errada.addEventListener("click", (e) => {
                e.preventDefault()
                errada.style.borderColor = "red"

            })
            errada2.addEventListener("click", (e) => {
                e.preventDefault()

                errada2.style.borderColor = "red"
            })

            certa3.addEventListener("click", (e) => {
                e.preventDefault()

                certa3.style.borderColor = "green"



            })
        })

    })
})

//dsadas