const sides = document.querySelectorAll(".angle_input");
const submitBtn = document.querySelector("#submit_Btn");
const output = document.querySelector("#output");

function sumOfSq(a,b){
    return (a*a + b*b);
}

function calHypotenus(){
    if(sides[0].value === '' ||sides[1].value === ''){
        showOutput("Please enter both the sides !");
    }else{
        let res = Math.sqrt(sumOfSq(Number(sides[0].value),Number(sides[1].value)));
        showOutput("Hypotenus = " + res.toFixed(2) + " cm");
    }
}
function showOutput(msg){
    output.innerHTML = `<h3>${msg}</h3>`;
}

submitBtn.addEventListener("click",calHypotenus);