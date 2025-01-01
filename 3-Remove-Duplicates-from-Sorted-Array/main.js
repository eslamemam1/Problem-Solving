/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = nums.length -1 ; i >= 0 ; i--){
        //console.log(nums[i])
        if(nums[i] === nums [i - 1]){
            nums.splice(i , 1)
        }
    }
    console.log(nums)
    return k = nums.length ;
};
removeDuplicates([1,1,2])