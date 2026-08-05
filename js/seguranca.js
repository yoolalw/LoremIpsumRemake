const nome = localStorage.getItem("nome")
const nomeUsuario = document.getElementById("nomeUsuario")
const img = localStorage.getItem("img")
const header = document.getElementById("header")
const img_pessoa = document.createElement("img")

const timer = document.getElementById("timer")
const pontos = document.getElementById("pontos")

const container = document.getElementById("container")

let perguntaAtual = 0

let pontoAtual = 0
let timerAtual = 0

// HEADER!!
img_pessoa.src = img
img_pessoa.className = "rounded-full size-[100px]"
header.appendChild(img_pessoa)
nomeUsuario.textContent = `Seja bem-vindo, ${nome}!`
//----=-==--


const perguntas =
{
    pergunta1: {
        titulo: "Como se deve utilizar o protetor auricular?",
        respostas: [
            { texto: "No pescoço", correta: false },
            { texto: "No ouvido", correta: true },
            { texto: "Na nuca", correta: false }
        ]
    },
    pergunta2: {
        titulo: "A bota de segurança é usada para:",
        respostas: [
            { texto: "Corrida", correta: false },
            { texto: "Jogar bola", correta: false },
            { texto: "Proteger contra objetos perfurocortantes", correta: true }
        ]
    },
    pergunta3: {
        titulo: "A faixa zebrada serve para:",
        respostas: [
            { texto: "Marcar golzinho na rua", correta: false },
            { texto: "Delimitar uma área restrita", correta: true },
            { texto: "Amarrar o cachorro", correta: false },
        ]
    }
}

const listaPerguntas = [
    perguntas.pergunta1,
    perguntas.pergunta2,
    perguntas.pergunta3,
]
function criarPerguntas(pergunta) {
    let html = `<h1 class="font-serif text-[40px] text-blue-800">${pergunta.titulo}</h1>`

    pergunta.respostas.forEach((resposta, index) => {
        html += `
        <label class="rounded-xl border-1 w-[500px] h-[100px] items-center flex justify-center text-[30px] text-center">
            <input 
                type="radio"  
                name="opcao" 
                class="mr-4 size-[20px]"
                data-correta="${resposta.correta}" 
                id="resposta${index}" 
                value="${resposta.texto}">
            ${resposta.texto}
        </label>
        `
    })
    return html;
}


function somarPontuação(quantidade) {
    pontoAtual += quantidade
    if(timerAtual == 0) { 
        pontoAtual - 5
    }
    pontos.textContent = `Pontos: ${pontoAtual}`
    return pontoAtual
    
}

let intervalo = null

function cronometro() {
    clearInterval(intervalo )
    timerAtual = 15;

    timer.textContent = timerAtual
    intervalo = setInterval(() => {
        timerAtual--

        if(timerAtual > 0){
            timer.textContent = timerAtual
        } else {
            clearInterval(intervalo)
            timer.textContent = 'Tempo esgotado'

            somarPontuação(-5)

            perguntaAtual++

            if(perguntaAtual < listaPerguntas.length){
                mostrarPergunta(listaPerguntas[perguntaAtual])
            } else {
                finalizarQuiz()
            }
        }
    }, 1000)
}

function clickBotao(botao, cor, callback = null) {
    if (!botao) return

    botao.addEventListener('click', (e) => {
        e.preventDefault()
        botao.style.borderColor = cor;

        if (callback) {
            callback()
        }
    })
    console.log("clicou botao")
}

function finalizarQuiz() {
    container.innerHTML = `

    `
}

function mostrarPergunta(pergunta) {
    container.innerHTML = criarPerguntas(pergunta)
    const respostas = document.querySelectorAll('input[name="opcao"]');

    respostas.forEach(resposta => {
        resposta.addEventListener('click', () => {
            if (resposta.dataset.correta === 'true') {
                perguntaAtual++;
                if (perguntaAtual < listaPerguntas.length) {
                    timer.textContent = ''
                   
                    setInterval.clear
                    cronometro()
                    mostrarPergunta(listaPerguntas[perguntaAtual])
                    somarPontuação(10)
                } else {
                    container.innerHTML = 'gsgpsl'
                }
            } else if (resposta.dataset.correta === 'false') {
                somarPontuação(-5)
            }
        })
    })
}
function quiz() {
    mostrarPergunta(listaPerguntas[0])
    cronometro()
    
}
quiz()