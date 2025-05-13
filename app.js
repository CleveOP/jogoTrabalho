// JSON com perguntas e respostas
const questions = [
    {
        "question": "Qual é o objetivo principal de um currículo?",
        "options": ["A) Conseguir um emprego", "B) Mostrar suas habilidades e experiências", "C) Fazer networking", "D) Participar de entrevistas"],
        "answer": "B",
        "explanation": "O objetivo principal de um currículo é destacar suas habilidades e experiências para atrair a atenção do recrutador."
    },
    {
        "question": "O que é mais importante em uma entrevista de emprego?",
        "options": ["A) Vestir-se bem", "B) Chegar no horário", "C) Demonstrar confiança e conhecimento", "D) Levar um presente para o entrevistador"],
        "answer": "C",
        "explanation": "Demonstrar confiança e conhecimento é essencial para causar uma boa impressão e mostrar que você está preparado para a vaga."
    },
    {
        "question": "Qual é a melhor prática ao enviar um currículo por e-mail?",
        "options": ["A) Enviar sem assunto", "B) Anexar o currículo e escrever uma mensagem personalizada", "C) Apenas anexar o currículo", "D) Enviar para vários empregadores ao mesmo tempo"],
        "answer": "B",
        "explanation": "Escrever uma mensagem personalizada demonstra profissionalismo e interesse na vaga."
    },
    {
        "question": "O que significa networking no mercado de trabalho?",
        "options": ["A) Fazer amigos", "B) Construir uma rede de contatos profissionais", "C) Usar redes sociais", "D) Trabalhar em equipe"],
        "answer": "B",
        "explanation": "Networking é a construção de uma rede de contatos profissionais que pode ajudar no desenvolvimento da carreira."
    },
    {
        "question": "Qual é a principal função de uma carta de apresentação?",
        "options": ["A) Repetir o conteúdo do currículo", "B) Explicar por que você é adequado para a vaga", "C) Pedir um aumento", "D) Informar seus dados pessoais"],
        "answer": "B",
        "explanation": "A carta de apresentação deve explicar por que você é o candidato ideal para a vaga, complementando o currículo."
    },
    {
        "question": "O que é um LinkedIn?",
        "options": ["A) Uma rede social profissional", "B) Um site de empregos", "C) Um aplicativo de mensagens", "D) Uma ferramenta de edição de currículo"],
        "answer": "A",
        "explanation": "O LinkedIn é uma rede social voltada para conexões profissionais e oportunidades de emprego."
    },
    {
        "question": "Qual é a melhor forma de responder sobre seus pontos fracos em uma entrevista?",
        "options": ["A) Negar que tem pontos fracos", "B) Apontar um ponto fraco e como está trabalhando para melhorá-lo", "C) Dizer que não sabe", "D) Mudar de assunto"],
        "answer": "B",
        "explanation": "Apontar um ponto fraco e mostrar como você está trabalhando para melhorá-lo demonstra autoconhecimento e proatividade."
    },
    {
        "question": "O que é um portfólio profissional?",
        "options": ["A) Um documento com suas conquistas", "B) Uma coleção de trabalhos realizados", "C) Um tipo de currículo", "D) Uma lista de contatos"],
        "answer": "B",
        "explanation": "Um portfólio é uma coleção de trabalhos realizados que demonstra suas habilidades e experiências."
    },
    {
        "question": "Qual é a melhor forma de se preparar para uma entrevista?",
        "options": ["A) Pesquisar sobre a empresa e a vaga", "B) Decorar respostas prontas", "C) Não se preparar", "D) Levar um amigo"],
        "answer": "A",
        "explanation": "Pesquisar sobre a empresa e a vaga ajuda a entender o que o empregador espera e como você pode se destacar."
    },
    {
        "question": "O que é mais importante em uma dinâmica de grupo?",
        "options": ["A) Ser o líder", "B) Trabalhar bem em equipe", "C) Falar mais que os outros", "D) Não participar"],
        "answer": "B",
        "explanation": "Trabalhar bem em equipe é essencial em dinâmicas de grupo, pois demonstra habilidades de colaboração."
    },
    {
        "question": "O que significa CLT?",
        "options": ["A) Contrato de Longo Termo", "B) Consolidação das Leis do Trabalho", "C) Carteira de Trabalho Livre", "D) Contrato de Trabalho Legal"],
        "answer": "B",
        "explanation": "CLT significa Consolidação das Leis do Trabalho, que regulamenta as relações trabalhistas no Brasil."
    },
    {
        "question": "Qual é a função de um recrutador?",
        "options": ["A) Contratar diretamente", "B) Selecionar candidatos para vagas", "C) Treinar funcionários", "D) Gerenciar equipes"],
        "answer": "B",
        "explanation": "O recrutador é responsável por selecionar candidatos que atendam aos requisitos das vagas disponíveis."
    },
    {
        "question": "O que é um freelancer?",
        "options": ["A) Um trabalhador autônomo", "B) Um funcionário de uma empresa", "C) Um estagiário", "D) Um gerente"],
        "answer": "A",
        "explanation": "Um freelancer é um trabalhador autônomo que presta serviços para diferentes clientes sem vínculo empregatício."
    },
    {
        "question": "Qual é a importância de um curso de qualificação?",
        "options": ["A) Melhorar habilidades profissionais", "B) Garantir um emprego", "C) Fazer amigos", "D) Ganhar dinheiro"],
        "answer": "A",
        "explanation": "Um curso de qualificação ajuda a melhorar suas habilidades e aumentar suas chances no mercado de trabalho."
    },
    {
        "question": "O que é uma entrevista comportamental?",
        "options": ["A) Uma entrevista sobre habilidades técnicas", "B) Uma entrevista focada em experiências passadas e comportamentos", "C) Uma entrevista em grupo", "D) Uma entrevista online"],
        "answer": "B",
        "explanation": "A entrevista comportamental avalia como você lidou com situações no passado para prever seu comportamento futuro."
    },
    {
        "question": "O que é um estágio?",
        "options": ["A) Um emprego temporário", "B) Uma oportunidade de aprendizado prático", "C) Um trabalho voluntário", "D) Um contrato CLT"],
        "answer": "B",
        "explanation": "O estágio é uma oportunidade de aprendizado prático para estudantes aplicarem seus conhecimentos."
    },
    {
        "question": "Qual é a melhor forma de lidar com um feedback negativo?",
        "options": ["A) Ignorar", "B) Refletir e buscar melhorar", "C) Ficar ofendido", "D) Reclamar com o chefe"],
        "answer": "B",
        "explanation": "Refletir sobre o feedback e buscar melhorar demonstra maturidade e vontade de crescer profissionalmente."
    },
    {
        "question": "O que é um plano de carreira?",
        "options": ["A) Um planejamento para alcançar objetivos profissionais", "B) Um contrato de trabalho", "C) Uma promoção", "D) Um curso técnico"],
        "answer": "A",
        "explanation": "Um plano de carreira é um planejamento estratégico para alcançar seus objetivos profissionais ao longo do tempo."
    },
    {
        "question": "O que significa home office?",
        "options": ["A) Trabalhar de casa", "B) Trabalhar no escritório", "C) Trabalhar em equipe", "D) Trabalhar em outro país"],
        "answer": "A",
        "explanation": "Home office significa trabalhar remotamente, geralmente de casa, utilizando ferramentas digitais."
    },
    {
        "question": "Qual é a principal vantagem de um trabalho em equipe?",
        "options": ["A) Dividir responsabilidades", "B) Trabalhar menos", "C) Evitar conflitos", "D) Não precisar se esforçar"],
        "answer": "A",
        "explanation": "Trabalhar em equipe permite dividir responsabilidades e aproveitar as habilidades de cada membro para alcançar melhores resultados."
    }
];

// Variáveis do jogo
let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = []; 


// Selecionar 5 perguntas aleatórias
function selectRandomQuestions() {
    // Embaralhar as perguntas
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    // Selecionar as 5 primeiras perguntas embaralhadas
    selectedQuestions = shuffled.slice(0, 3);
}

// Exibir a pergunta atual
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");

    // Limpar opções anteriores
    optionsElement.innerHTML = "";

    // Exibir a pergunta
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Exibir as opções
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option[0]); // Verificar a resposta
        optionsElement.appendChild(button);
    });

    // Ocultar o botão "Próxima Pergunta"
    nextButton.style.display = "none";

}

// Verificar a resposta do jogador
function checkAnswer(selectedOption) {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    const explanationElement = document.getElementById("explanation");
    const optionsElement = document.getElementById("options");


    // Destacar as respostas
    Array.from(optionsElement.children).forEach(button => {
        // Destacar a resposta correta em verde
        if (button.textContent[0] === currentQuestion.answer) {
            button.style.backgroundColor = "green";
            button.style.color = "white";
        }

        // Destacar a resposta errada em vermelho
        if (button.textContent[0] === selectedOption && selectedOption !== currentQuestion.answer) {
            button.style.backgroundColor = "red";
            button.style.color = "white";
        }

        // Desabilitar todos os botões após a resposta
        button.disabled = true;
    });

    // Atualizar a pontuação se a resposta estiver correta
    if (selectedOption === currentQuestion.answer) {
        score++;
        updateScore(); // Atualizar a pontuação na tela
    }

    // Exibir a explicação
    explanationElement.textContent = selectedOption === currentQuestion.answer
        ? `Correto! ${currentQuestion.explanation}`
        : `Errado! ${currentQuestion.explanation}`;
    explanationElement.style.display = "block";

    // Mostrar o botão "Próxima Pergunta"
    const nextButton = document.getElementById("next-button");
    nextButton.style.display = "block";
}

// Avançar para a próxima pergunta ou finalizar o jogo
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

// Finalizar o jogo
function endGame() {
    const questionContainer = document.getElementById("question-container");
    const resultElement = document.getElementById("result");
    const explanationElement = document.getElementById("explanation");

    // Esconder o container de perguntas
    questionContainer.style.display = "none";

    // Esconder a explicação da resposta anterior
    explanationElement.style.display = "none";

    // Verificar se o jogador acertou 3 ou mais perguntas
    if (score >= 3) {
        resultElement.textContent = "Parabéns! Você esta preparado para o mercado de trabalho!.🎉🥳";
    } else {
        resultElement.textContent = "Você perdeu! Precisa participar do Emprega!!";
    }

    // Exibir o resultado
    resultElement.style.display = "block";
}

// Inicializar o jogo
function startGame() {
    selectRandomQuestions();
    showQuestion();

    const nextButton = document.getElementById("next-button");
    nextButton.onclick = nextQuestion;
}

// Iniciar o jogo ao carregar a página
window.onload = startGame;

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `Tempo restante: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Tempo restante: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion(); // Avançar automaticamente para a próxima pergunta
        }
    }, 1000);
}


function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Pontuação: ${score}`;
}