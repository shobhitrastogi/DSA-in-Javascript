function missingNumber(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let n = array.length + 1; 
    let ans = (n * (n + 1)) / 2;
    return ans - sum;
}

const array = [1, 2, 3, 4, 6]; // Assuming 5 is missing
console.log("Missing number:", missingNumber(array));