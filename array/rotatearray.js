function rotateArray(arr) {
    let last = arr[arr.length - 1]; // Fetch the last element of the array
    for (let i = arr.length - 2; i >= 0; i--) { // Start from the second to last element and move towards the beginning
        arr[i + 1] = arr[i]; // Move each element one position to the right
    }
    arr[0] = last; // Place the last element at the beginning
}

const arr = [1, 2, 3, 4, 5];
rotateArray(arr);
console.log(arr);