const quizDB = [
    {
        question: "Q1: What is the full of HTML",
        a: "Hello to all Land",
        b: "Hey text Markup Language",
        c: "HyperText Makeup languages",
        d: "Hypertext Markup language",
        ans: "ans4",
    },
    {
        question: "Q2: What is the full of CSS",
        a: "Cascading Style Shoping mall",
        b: "Cascading Style sheed",
        c: "Cascading Style Sheets",
        d: "Cascading Style shop",
        ans: "ans3",
    },
    {
        question: "Q3: What is the full of HTTP",
        a: "Hyper transtion on head",
        b: "Hypertext tranfer Protocol",
        c: "Hypertext Tranfer Product",
        c: "Hypertext Trining Product",

        ans: "ans2",
    },
    {
        question: "Q4: What is the full of JS",
        a: "JavaScript",
        b: "javasuper",
        c: "javatext",
        d: "javasoney",
        ans: "ans1",
    }
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.anwser');
const showScore = document.querySelector('#showScore');

let questionCount = 0
let score = 0
 
const loadQuestion = () => {
    const questionList = quizDB[questionCount]

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();


const getCheckAnwser = () =>{
    let anwser;
    
    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            anwser = curAnsElem.id;
        }
    });

    return anwser;
    


}
const deselectALL= () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnwser()
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans){
        score++;
    };


    questionCount++;
    deselectALL() 


    if (questionCount < quizDB.length) {
        loadQuestion()
    } else{
        showScore.innerHTML = `
        <h3> You Scored ${score}/${quizDB.length} Good...</h3>
        <button class= "btn"  onclick="location.reload()"> play again</button>
        `;
        showScore.classList.remove('scoreArea')

    }
})