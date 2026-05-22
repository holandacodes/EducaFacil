const perguntas = [

{
    pergunta: "O que significa HTML?",
    respostas: [
        "HyperText Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language",
        "Hyper Trainer Marking Language"
    ],
    correta: 0
},

{
    pergunta: "Qual linguagem é usada para estilizar páginas?",
    respostas: [
        "Python",
        "CSS",
        "Java",
        "C++"
    ],
    correta: 1
},

{
    pergunta: "Qual símbolo é usado para comentários no CSS?",
    respostas: [
        "// comentário",
        "# comentário",
        "/* comentário */",
        "<!-- comentário -->"
    ],
    correta: 2
},

{
    pergunta: "Qual linguagem deixa o site interativo?",
    respostas: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL"
    ],
    correta: 2
},

{
    pergunta: "Quem é Gustavo Guanabara?",
    respostas: [
        "Professor de programação",
        "Jogador de futebol",
        "Cantor",
        "Empresário"
    ],
    correta: 0
}

];

let perguntaAtual = 0;
let pontos = 0;
let tempo = 30;
let timer;

const pergunta =
document.getElementById("pergunta");

const respostas =
document.getElementById("respostas");

const contador =
document.getElementById("contador");

const nextBtn =
document.getElementById("nextBtn");

const progress =
document.getElementById("progress");

const timerElement =
document.getElementById("timer");

function iniciarQuiz(){

    mostrarPergunta();

    iniciarTimer();

}

function mostrarPergunta(){

    resetarEstado();

    let perguntaObj =
    perguntas[perguntaAtual];

    contador.innerText =
    `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    pergunta.innerText =
    perguntaObj.pergunta;

    perguntaObj.respostas.forEach(
    (resposta, index)=>{

        const button =
        document.createElement("button");

        button.innerText = resposta;

        button.classList.add("answer-btn");

        respostas.appendChild(button);

        button.addEventListener("click", ()=>{

            if(index === perguntaObj.correta){

                button.style.background =
                "#22C55E";

                button.style.color =
                "white";

                pontos++;

            }else{

                button.style.background =
                "#EF4444";

                button.style.color =
                "white";

            }

            Array.from(respostas.children)
            .forEach(btn => btn.disabled = true);

        });

    });

    atualizarBarra();

}

function resetarEstado(){

    respostas.innerHTML = "";

}

nextBtn.addEventListener("click", ()=>{

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        mostrarPergunta();

    }else{

        finalizarQuiz();

    }

});

function finalizarQuiz(){

    clearInterval(timer);

    localStorage.setItem(
        "pontuacao",
        pontos
    );

    pergunta.innerHTML =
    `🎉 Você acertou ${pontos}/${perguntas.length}`;

    respostas.innerHTML = "";

    contador.innerHTML =
    "Quiz Finalizado";

    nextBtn.style.display = "none";

    progress.style.width = "100%";

}

function atualizarBarra(){

    let progresso =

    ((perguntaAtual + 1)
    / perguntas.length) * 100;

    progress.style.width =
    progresso + "%";

    /* SALVA PROGRESSO */

    localStorage.setItem(
        "progresso",
        progresso
    );

}

function iniciarTimer(){

    timer = setInterval(()=>{

        tempo--;

        timerElement.innerText = tempo;

        if(tempo <= 0){

            clearInterval(timer);

            finalizarQuiz();

        }

    },1000);

}

iniciarQuiz();