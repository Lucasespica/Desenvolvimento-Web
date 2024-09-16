const questions = [
    {
        question: "Em que ano o Brasil foi tetracampeão mundial?",
        answers: ["1997", "1996", "1995", "1994"],
        correctAnswer: 3
    },
    {
        question: "No programa do Gugu, como se chama o companheiro do E.T?",
        answers: ["Astolfo", "Rodolfo", "Lindolfo", "Adolfo"],
        correctAnswer: 1
    },
    {
        question: "O que é via Láctea?",
        answers: [
            "Marca de leite",
            "Civilização antiga",
            "Marca de carro",
            "Galáxia"
        ],
        correctAnswer: 3
    },
    {
        question: "Qual metal é usado na cunhagem de moedas?",
        answers: [
            "Níquel",
            "Hélio",
            "Chumbo",
            "Mercúrio"
        ],
        correctAnswer: 0
    },
    {
        question: "Quantas colunas verticais existem na tabela periódica atualmente?",
        answers: [
            "15",
            "17",
            "18",
            "19"
        ],
        correctAnswer: 2
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

function restart(){
    location.reload();
}

window.onload = loadQuestions;