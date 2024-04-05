
var sortBy = function(arr, fn) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (fn(arr[j]) < fn(arr[minIndex])) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; 
        }
    }

    return arr;
};

const array = [ { name: 'John', age: 30 }, { name: 'Alice', age: 25 }, { name: 'Bob', age: 35 } ];

const getAge = obj => obj.age;

const sortedArray = sortBy(array, getAge);
console.log(sortedArray); 
