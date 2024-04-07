var nextGreaterElement  = function(num1, num2) {
    const stack =[];
    const NextGreaterElement  = new Map();
    for(let num of num2){
        while(stack.length && stack[stack.length - 1] <num){
            nextGreaterElement.set(stack.pop(),num)
        }
        stack.push(num)
    }
    return nums1.map(num => nextGreaterElement.has(num) ? nextGreaterElement.get(num):-1)
}