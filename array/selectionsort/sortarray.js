var sortArray = function(nums) {
    const n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        // Find the index of the minimum element in the unsorted portion of the array
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum element with the first element of the unsorted portion
        if (minIndex !== i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]; // Swap using destructuring assignment
        }
    }

    return nums;
};