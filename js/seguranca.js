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
        respostas: {
            errada1: "No pescoço",
            certa: "No ouvido",
            errada2: "Na nuca"
        }
    },
    pergunta2: {
        titulo: "A bota de segurança é usada para:",
        respostas: {
            errada1: "Corrida",
            errada2: "Jogar bola",
            certa: "Proteger contra objetos perfurocortantes"
        }
    },
    pergunta3: {
        titulo: "A faixa zebrada serve para:",
        respostas: {
            errada1: "Marcar golzinho na rua",
            certa: "Delimitar uma área restrita",
            errada2: "Amarrar o cachorro"
        }
    }
}

function criarPerguntas(titulo, r1, r2, r3) {
    return `
        <h1 class="font-serif text-[40px] text-blue-800">${titulo}</h1>
        <label class="rounded-xl border-1 border-blue-800 w-[500px] h-[100px] items-center flex justify-center text-[30px] text-center"><input type="radio"  name="opcao" class="mr-4 size-[20px]" id="${r1}" value="${r1}">${r1}</label>
        <label class="rounded-xl border-1 border-blue-800 w-[500px] h-[100px] items-center flex justify-center text-[30px]  text-center"><input type="radio" name="opcao" class="mr-4 size-[20px]" id="${r2}" value="${r2}">${r2}</label>
        <label class="rounded-xl border-1 border-blue-800 w-[500px] h-[100px] items-center flex justify-center text-[30px] text-center"><input type="radio"  name="opcao" class="mr-4 size-[20px]" id="${r3}" value="${r3}">${r3}</label>
    `
}
function somarPontuação() {
    pontoAtual = 0

    if (perguntas.certa) { return pontoAtual += 10 }
    else if (perguntas.errada1 || perguntas.errada2) { return pontoAtual -= 5 }
    else if (timerAtual == 0) { return pontoAtual -= 5 }
}

function cronometro() {
    timer.textContent = ""
    timerAtual = 16
    setInterval(() => {
        if (timerAtual > 0) {
            timerAtual--
            timer.textContent = timerAtual
        } else if (timerAtual == 0) {
            timer.textContent = 'Tempo esgotado.'
        }

    }, 1000)
}

function quiz() {
    cronometro()
    container.innerHTML += criarPerguntas(
        perguntas.pergunta1.titulo,
        perguntas.pergunta1.respostas.errada1,
        perguntas.pergunta1.respostas.certa,
        perguntas.pergunta1.respostas.errada2
    )
    
    const certa = document.getElementById("certa")
    const errada1 = document.getElementById("errada1")
    const errada2 = document.getElementById("errada2")
    
    

    
    console.log(perguntas.pergunta1.respostas.errada2)
}
quiz()