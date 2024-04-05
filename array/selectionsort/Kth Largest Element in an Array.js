/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const n = nums.length;

    // Helper function to find the kth largest element using selection sort
    const findKthLargestUsingSelectionSort = (arr, k) => {
        for (let i = 0; i < k; i++) {
            let maxIndex = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > arr[maxIndex]) {
                    maxIndex = j;
                }
            }
            if (maxIndex !== i) {
                [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
            }
        }
        return arr[k - 1];
    };

    // Call the helper function to find the kth largest element
    return findKthLargestUsingSelectionSort(nums, k);
};
