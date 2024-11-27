function sum(a, b){
    return a + b;
}
function calc(operand1, operand2, operator){
    switch (operator){
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            return operand1 / operand2;
    }
}
function triangleChecker(a, b, c){
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a){
        return "none";
    }
    if (a === b && b === c){
        return "equilateral";
    }
    if (a === b || a === c || b === c){
        return "isosceles";
    }
    return "scalene";
}

export { sum, calc, triangleChecker };