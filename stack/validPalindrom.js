var isValid = function(s){
    const stack=[];
        const mapping  ={
            ')':'(',
            ']':"[",
            '}':'{'
        };
        for (let i=0;i<s.length;i++){
            if(s[i]==='(' ||s[i]==='[' || s[i]==='{'){
                stack.push(s[i]);
            }else{
                const top  = stack.pop();
                if(top !== mapping(s[i])){
                    return false;
                }
            }
        }
        return stack.length ==0;
}