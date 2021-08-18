const quizForm = document.querySelector(".quiz_form");
const submitBtn = document.querySelector("#submit_Btn");
const output = document.querySelector("#output");

const correctAns = ["90", "right angled"];

function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let val of formResults.values()){
        if(val === correctAns[index]){
            score++;
        }
        index++;
    }
    output.innerHTML = `<h3>Your Score is : ${score}</h3>`
}

submitBtn.addEventListener("click", calculateScore);