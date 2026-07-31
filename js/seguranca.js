const timer = document.getElementById("timer")
const container = document.getElementById("container")
const pontos = document.getElementById("pontos")

let pontuacaoTotal = 0
let acertos = 0
let intarvalId = null
let perguntaAtual = 0

const perguntas = [
    {
        texto: "Como se deve usar o protetor auricular?",
        opcoes: [
            {
                texto: "No pescoco",
                correta: false
            },
            {
                texto: "No pescoco",
                correta: true
            },
            {
                texto: "No pescoco",
                correta: false
            }
        ]
    },
    {
        texto: "A bota de segurança é usada para:",
        opcoes: [
            {
                texto: "Corrida",
                correta: false
            },
            {
                texto: "Jogar bola",
                correta: false
            },
            {
                texto: "Proteger contra objetos perfurocortantes",
                correta: true
            }
        ]
    },
    {
        texto: "A faixa zebrada serve para:",
        opcoes: [
            {
                texto: "Marcar golzinho na rua",
                correta: false
            },
            {
                texto: "Delimitar uma área restrita",
                correta: true
            },
            {
                texto: "Amarrar o cachorro",
                correta: false
            }
        ]
    }
]

function home() {
    window.location.href = "home.html"
}
function login() {
    localStorage.clear()
    window.location.href = "login.html"
}
function soma(quantidade) {
    pontuacaoTotal += quantidade
    pontos.textContent = `Pontos: ${pontuacaoTotal}`
    return pontuacaoTotal
}

function iniciarTimer() {
    if (intervalId) clearInterval(intervalId)

    let time = 15
    timer.textContent = time

    intervalId = setInterval(() => {
        time--
        if (time > 0) {
            timer.textContent = time
        } else {
            timer.textContent = "Tempo esgotado"
            clearInterval(intervalId)
            proximaPergunta()
        }
    }, 1000)
}

function renderPergunta(indice) {
    const pergunta = perguntas[indice]

    const opcoesHtml = pergunta.opcoes.map((op, i) => `
        <label class="text-[20px] h-[40px] w-[500px] border-1 rounded-xl block" data-index="${i}">
            <input class="p-4 w-[70px]" type="resposta" value="${op.correta ? 'certo' : 'errado'}">
            ${op.texto}
        </label>
    `
    ).join('')

    container.innerHTML = `
        <h2 class="font-serif text-[30px] text-[#4e6580] mb-3">${pergunta.texto}</h2>
        ${opcoesHtml}
    `
    iniciarTimer()

    const labels = container.querySelectorAll('label')
    let respondido = false

    labels.forEach((label, i) => {
        label.addEventListener('click', (e) => {
            e.preventDefault()
            if (respondido) return
            respondido = true
            clearInterval(intervalId)

            const acertou = pergunta.opcoes[i].correta
            label.style.borderColor = acertou ? "green" : "red"

            if (acertou) {
                acertos++
                soma(10)
            } else {
                soma(-5)
            }

            setTimeout(proximaPergunta, 800)
        })
    })
}

function proximaPergunta() {
    perguntaAtual++
    if (perguntaAtual < perguntas.length) {
        renderPergunta(perguntaAtual)
    } else {
        finalizarQuiz()
    }
}

function finalizarQuiz() {
    clearInterval(intervalId)
    timer.textContent = ""

    const porcentagem = Math.round((acertos / perguntas.length) * 100)

    container.innerHTML = `
     <h1 class="font-serif text-blue-900 text-[30px]">Parabéns! Você chegou ao final do quiz.</h1>
        <h2 class="font-serif text-blue-900 text-[20px]">Aproveitamento: ${porcentagem}%</h2>
        <h2 class="font-serif text-blue-900 text-[20px]">${pontos.textContent}</h2>
    `
}

renderPergunta(perguntaAtual)