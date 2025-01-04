var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
   console.log(nums[Math.floor(nums.length /2)])
};
majorityElement([2,3,3,5,4,3,10,10,10,10,10,10])