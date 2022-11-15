const startBtn = document.getElementById('btn-start')
const nextBtn = document.getElementById('btn-next')
const result = document.getElementById('result')
const questionContainerElements = document.getElementById('question-container')
const questionElements = document.getElementById('question');
const answerBtnElements = document.getElementById('answer-container');

const questions = [
    {
        question : "What is 2 + 2?",
        answers : [
            {text : '4', correct: true},
            {text : '44', correct: false},
            {text : '32', correct: false},
            {text : '57', correct: false}
        ]
    },
    {
        question : "What is 3 + 2?",
        answers : [
            {text : '51', correct: false},
            {text : '10', correct: false},
            {text : '415', correct: false},
            {text : '5', correct: true}
           
        ]
    },
    {
        question : "What is 6 + 2?",
        answers : [
            {text : '44', correct: false},
            {text : '8', correct: true},
            {text : '21', correct: false},
            {text : '1', correct: false},
        ]
    }
]

let shuffleQuestions, currentQuestionIndex;

startBtn.addEventListener('click', startQuiz);

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startQuiz () {
    startBtn.classList.add('hide');
    questionContainerElements.classList.remove('hide');
    shuffleQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0; 
    setNextQuestion();
}


function setNextQuestion (){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion (mainQuestion) {
    questionElements.innerText = mainQuestion.question;
    mainQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('answer-btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerBtnElements.appendChild(button);
    })
}

function resetState () {
    nextBtn.classList.add('hide');
    clearStatusClass(document.body)
    while (answerBtnElements.firstChild) {
        answerBtnElements.removeChild(answerBtnElements.firstChild);
    }
}


function selectAnswer (e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerBtnElements.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = "Restart Quiz";
        startBtn.classList.remove('hide');
        questionContainerElements.classList.add('hide');
        clearStatusClass(document.body);
        displayResult();
    }

    // for(var i = 0; i < questions.length, i++) {

    // }

}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove ('correct')
    element.classList.remove ('wrong')
}

function displayResult() {
    let row;
    let studentStorage = localStorage.getItem('users');
    let getStudent = JSON.parse(studentStorage);
   
    let student = getStudent.filter((studentUser) => {
        return studentUser.fName
    });

    if(getStudent != null) {
        row =`<p><strong>Full Name:</strong> ${student[0].fName}</p>
        <p><strong>Score:</strong> </p>`
    }
    result.innerHTML = row;
}