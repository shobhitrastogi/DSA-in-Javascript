class Stack{
    constructor(){
        this.items =[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return"Underflow";
        }
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length == 0;
    }
    size(){
        return this.items.length;
    }
    printStack(){
        let stack ="";
        for(let i = 0;i<this.items.length;i++){
            stack += this.items[i]+" ";
        }
        console.log("Stack" +stack);
    }
}
// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.printStack(); // Output: Stack: 10 20 30

console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2