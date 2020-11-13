//* Given an array of integers, return the indices of the two numbers that add up to a given target
//* Verify the constraints:
//* 1. are all numbers positive or can there be negatives?
//* 2. are there duplicates?
//* 3. Will there always be a solution available? (No 2 numbers add up, empty array, 1 element in array)
//* 4. What do we return if there is no solution? e.g Null?
//* 5. Can there be multiple pairs that add up to the target?
//* 6. Is the array sorted?
//* Write the steps the algorithm will take to achieve its goal

function bruteForceTwoSum(nums, target) {
	if (nums.length <= 1) {
		return null;
	}
	let numberToFind;
	for (let i = 0; i < nums.length - 1; i++) {
    numberToFind = target - nums[i];
    // need i + 1 instead of 1 since when finish inner loop only outer loop is incremented and reinitialize the loop!
    // best practice to do j = i + 1
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[j] === numberToFind) {
				return [i, j];
			}
		}
	}
	return null;
}
