/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counter = 0;
    let majorityElements = 0;

    for (let i = 0; i < nums.length; i++) {
        counter = 1; // Start counter for the current element

        // Inner loop to count occurrences of nums[i]
        for (let x = i + 1; x < nums.length; x++) {
            if (nums[i] === nums[x]) {
                counter++;
            }
        }

        // Check if the current element is the majority element
        if (counter > Math.floor(nums.length / 2)) {
            majorityElements = nums[i];
            return majorityElements; // Return immediately as we found the majority element
        }
    }

    // Edge case for arrays with one element
    if (nums.length === 1) {
        return nums[0];
    }

    return majorityElements; // This line will never be reached because a majority is guaranteed
};

// Test the function
console.log(majorityElement([6, 6, 6, 7, 7,7])); // Output: 6
