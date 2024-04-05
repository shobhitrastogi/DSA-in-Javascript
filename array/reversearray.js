

const reverseArray=(arr)=>{
    const n = arr.length;
    let left = 0;
    let right = n-1;

 while(left < right){
    [arr[left], arr[right]]= [arr[right], arr[left]]
    left++;
    right--;
 }
 return arr;
}

let arr = [1, 2, 3, 4, 5];
console.log(reverseArray(arr)); // Output: [5, 4, 3, 2, 1]
