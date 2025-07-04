const quizData = [
    {
        question: "What Does HTML Stand For?",
       a: "Hyper Text Markup Language",
        b: "High Tag Mode Line",
        c: "Hello Top Machine Law",
        d: "Hyper Target Mark Lane",
        correct: "a",
    },
    {
        question: "What Is The Father Of JavaScript?",
        a: "Jordan Walke",
        b: "Brendan Eich",
        c: "Jeff Bezos",
        d: "Kevin Systrom",
        correct: "b",
    },
    {
        question: "What Does IT Stand For?",
        a: "Information Technology",
        b: "Internet Tracker",
        c: "Information Terminals",
        d: "Innovation Texture",
        correct: "a",
    },
    {
        question: "What Year Was BootStrap launched?",
        a: "2006",
        b: "2011",
        c: "1998",
        d: "1995",
        correct: "b",
    },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})