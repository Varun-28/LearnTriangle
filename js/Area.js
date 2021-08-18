const sides = document.querySelectorAll(".angle_input");
const submitBtn = document.querySelector("#submit_Btn");
const output = document.querySelector("#output");


function calArea(){
    if(sides[0].value === '' ||sides[1].value === ''){
        showOutput("Please enter Base and Height Both !");
    }else{
        let res = 0.5*(Number(sides[0].value)*Number(sides[1].value));
        showOutput("Area of Triangle = " + res.toFixed(2) + " cm sq.");
    }
}
function showOutput(msg){
    output.innerHTML = `<h3>${msg}</h3>`;
}

submitBtn.addEventListener("click",calArea);