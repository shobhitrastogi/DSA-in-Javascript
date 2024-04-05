/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const duplicates = [];
    
    // Implementing Selection Sort
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        let temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
        
        // Check for duplicates while sorting
        if (i > 0 && nums[i] === nums[i - 1]) {
            duplicates.push(nums[i]);
        }
    }
    
    return duplicates;
};
