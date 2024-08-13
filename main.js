const userInput = document.getElementById('userInput')

let expression = '';

function press(num){
    expression += String(num);
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
    expression = ''
}
function erase(){
    expression = '';
    userInput.value = expression
}