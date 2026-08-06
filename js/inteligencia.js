const nome = localStorage.getItem("nome")
const nomeUsuario = document.getElementById("nomeUsuario")
const img = localStorage.getItem("img")
const header = document.getElementById("header")
const img_pessoa = document.createElement("img")

const pontos = document.getElementById("pontos")
const timer = document.getElementById("timer")
const container = document.getElementById("container")

let perguntaAtual = 0
let pontosAtual = 0
let time = 0

// HEADER!!
img_pessoa.src = img
img_pessoa.className = "rounded-full size-[100px]"
header.appendChild(img_pessoa)
nomeUsuario.textContent = `Seja bem-vindo, ${nome}!`
//----=-==--

const perguntas =
{
    pergunta1:
    {
        titulo: 'Caso alguém faça uma brincadeira ofensiva com um colega, devemos:',
        respostas:
            [
                { texto: 'Partir para a briga', correta: 'false' },
                { texto: 'Primeiramente conversar sobre o ocorrido', correta: 'true' },
                { texto: 'Chamar a policia', correta: 'false' }
            ]
    },
    pergunta2:
    {
        titulo: 'Quais alterantiva que mostra apenas assuntos sensíveis e devem ser evitados em ambiente de trabalho?',
        respostas:
            [
                { texto: 'Política, religião e futebol', correta: 'true' },
                { texto: 'Churrasco, café e religião', correta: 'false' },
                { texto: 'Notícias, esportes e games', correta: 'false' }
            ]
    }
}

const listaPerguntas = [
    perguntas.pergunta1,
    perguntas.pergunta2
]

function criarPerguntas(pergunta) {
    let html = `<h2 class="font-serif text-[30px]">${pergunta.titulo}</h2>`
    pergunta.respostas.forEach((resposta, index) => {
        html += `
        <label class="label rounded-xl border-1 w-[500px] h-[100px] items-center flex justify-center text-[30px] text-center">
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
    return html
}


function somarPontuacao(quantidade) {
    pontosAtual += quantidade
    if (pontosAtual -= 0) {
        pontos.textContent = 0
    }
    if (timerAtual == 0) {
        pontos -= 5
    }

    pontos.textContent = `Pontos: ${pontosAtual}`
    return pontosAtual
}


let intervalo = null
function cronometro() {
    clearInterval(intervalo)
    time = 15
    intervalo = setInterval(() => {
        if (time > 0) {
            time--
            timer.textContent = time
        } else {
            timer.textContent = 'Tempo esgotado.'
            if (perguntaAtual < listaPerguntas.length) {
                clearInterval(intervalo)
                mostrarPergunta(listaPerguntas[perguntaAtual])
                somarPontuacao(-5)
            } else {
                finalizarQuiz()
            }
        }
    }, 1000)
}

function quiz() {
    cronometro()
    container.innerHTML = criarPerguntas(listaPerguntas[0])
}
quiz()