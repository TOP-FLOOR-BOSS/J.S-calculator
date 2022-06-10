// let display = document.getElementById('dispalyer');

// let buttons = Array.from(document.getElementsByClassName('button'));
// console.log(button);

let sum = "";
function addNumbers(operator){
    sum = sum + operator;
    document.getElementById('output').innerText = sum;
};

function clearNumber(){
sum = "";
document.getElementById('output').innerText = sum;
};

function evalNumber(){
document.getElementById('output').innerText = eval(sum); 
}