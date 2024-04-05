const findsecondmax =()=>{
let max = -Infinity
let secondmax = -Infinity
for (let i = 0; i < arr.length; i++) {
  if(arr[i]>max){
    secondmax = max
    max = arr[i]    
  }else if (arr[i] > secondmax  && arr[i] !== max ){
    secondmax =arr[i]
  }
    
}
return secondmax
}
const arr = [1, 2, 3, 4, 5];
console.log(findsecondmax(arr));