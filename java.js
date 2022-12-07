const quizData = [
    {
        question: "A - B is read as?",
        a: "Difference of A and B of B and A",
        b: "Difference of B and A",
        c: "Both a and b",
        d: "None of the anove",
        correct: "b",
    },
    {
        question: " In  Triangle ABC, right-angled at B, AB = 24 cm, BC = 7 cm. The value of tan C is:",
        a: "12/7",
        b: "24/7",
        c: "20/7",
        d: "7/24",
        correct: "b",
    },
    {
        question: "(Sin 30°+cos 60°)-(sin 60° + cos 30°) is equal to:",
        a: "0",
        b: "1",
        c: "1/2",
        d: "None of the above",
        correct: "a",
    },
    {
        question: " What will be the value of P(not E) if P(E) = 0.07?",
        a: "90",
        b: "007",
        c: "93",
        d: "72",
        correct: "c",
    },
    {
        question: "What will be the probability of getting odd numbers if a dice is thrown?",
        a: "1/2",
        b: "2",
        c: "4/2",
        d: "5,2",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
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