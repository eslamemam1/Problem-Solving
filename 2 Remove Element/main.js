/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    for(let i = nums.length - 1 ; i >= 0; i--){
        if(nums[i] === val){
            nums.splice(i , 1)
        }
    }
    console.log(nums)
    return k = nums.length ;
};
removeElement([3,3,2,2],3)

/**
 * const newA = [] ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== val ) {
            newA.push(nums[i])
            nums.splice(nums[i],1)
            nums.removeElement(nums[i])
            console.log(nums)
        }
    }
    nums.slice(3);
    console.log(nums)
    console.log(newA)
    return k = newA.length
 * let newA = nums.filter(
        (items) => {
            return items !== val
        }
    )
    console.log(newA)
 */