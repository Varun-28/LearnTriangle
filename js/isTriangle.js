const inputs = document.querySelectorAll(".angle_input");
const isTriangleBtn = document.querySelector("#isTriangle_Btn");
const output = document.querySelector("#output");

function sumAngle(angle1,angle2,angle3){
    return (angle1 + angle2 + angle3);
}

function isTriangle(){
    if(inputs[0].value === '' ||inputs[1].value === '' ||inputs[2].value === '' ){
        showOutput("Please Enter All Three Angles !");
    }else{
        var sumOfAngle = sumAngle(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
        if(sumOfAngle === 180){
            showOutput("Given Angles form a Triangle 🥳");
        }else{
            showOutput("Invalid Angles, Try again 😐");
        }
    }
}
function showOutput(msg){
    output.innerHTML = `<h3>${msg}</h3>`;
}

isTriangleBtn.addEventListener("click", isTriangle);