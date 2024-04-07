var evalPRN = function (token) {
    const stack  =[];
    const operators = ['+', '-', '*', '/'];
    for(let token of tokens){
        if(!operators.includes(token)){
            stack.push(parseInt(token));
        }else{
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            switch(token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(parseInt(operand1 / operand2)); // Division truncates towards zero
                    break;
            }
        }

    }
    return stack.pop();
}