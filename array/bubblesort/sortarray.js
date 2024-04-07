/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const len  = nums.length;
    for(let i  =0; i<len;i++){
        for(let j =0;j<len-1;j++){
            if(nums[j]> nums[j+1]){
               var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
};