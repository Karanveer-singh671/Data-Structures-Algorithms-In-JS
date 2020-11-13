//* Given an array of integers, return the indices of the two numbers that add up to a given target
//* Verify the constraints:
//* 1. are all numbers positive or can there be negatives?
//* 2. are there duplicates?
//* 3. Will there always be a solution available? (No 2 numbers add up, empty array, 1 element in array)
//* 4. What do we return if there is no solution? e.g Null?
//* 5. Can there be multiple pairs that add up to the target?
//* 6. Is the array sorted?
//* Write the steps the algorithm will take to achieve its goal
//* Write or discuss a brute force algorithm
//* talk about drawbacks and optimization
//* code out optimization
//* check for syntax errors or any other glaring errors
//* run through a test case to verify solution

function bruteForceTwoSum(nums, target) {
	// T: O(N^2), S: O(1) (is there a way to make Space higher and reduce time complexity, make one worse to make one better)
	if (nums.length <= 1) {
		return null;
	}
	let numberToFind;
	for (let i = 0; i < nums.length - 1; i++) {
		console.log({ i, value: nums[i] });
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
// use a hashmap lookup is O(1) assuming good hash function
function twoSumOptimal(nums, target) { // T: O(n), S: O(n)
	if (nums.length <= 1) {
		return null;
	}
	let numberToFind;
	// Optimize by breaking two for loops into non nested
	let numsMap = {};
	// go through each element in array and store the numberToFind as a key and index as a value
	for (let i = 0; i < nums.length; i++) {
		// could be number or undefined
		const numsMapVal = numsMap[nums[i]];
		if (numsMapVal >= 0) {
			return [numsMapVal, i];
		} else {
			numberToFind = target - nums[i];
			numsMap[numberToFind] = i;
		}
	}
	return null;
}


function twoSum(nums, target) {
  if(nums.length <=1) {
    return null
  }
  let numsMap = {}
  let numberToFind;
  let numsMapValue;
  for(let i = 0; i < nums.length;i++) {
    numsMapValue = numsMap[nums[i]]
    if (numsMapValue == null) {
      numberToFind = target - nums[i]
      numsMap[numberToFind] = i
    } else {
      return [numsMapValue, i]
    }
  }
  return null
}

const nums = [1, 3, 7, 9, 2]; // target = 11

/* obj = {
  10:0,
  8:1,
  4:2,
  2:3,
} */
