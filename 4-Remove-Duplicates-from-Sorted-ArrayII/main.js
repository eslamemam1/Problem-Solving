/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = nums.length - 1 ; i >= 0 ; i--){
        if(nums[i] === nums[i -2]){
            nums.splice(i , 1)
        }
    }
    return k = nums.length ;
    //console.log(nums)
};
removeDuplicates([1,1,1,2,2,2,3,3,3])