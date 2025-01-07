/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/** 
 * var rotate = function (nums, k) {
    let last = 0;
        for (let i = 0; i < k; i++) {
            last = nums.pop();
            nums.unshift(last)
            console.log(nums)
        }
};
rotate([1, 2, 3, 4, 5, 6, 7], 3)
*/
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // Handle cases where k > nums.length
    let rotated = new Array(n);

    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = nums[i];
        //console.log(rotated)
        //console.log(nums[i])
    }

    // Copy back to nums
    for (let i = 0; i < n; i++) {
        nums[i] = rotated[i];
    }
    console.log(nums)
};
rotate([1, 2, 3, 4, 5, 6, 7], 3)
