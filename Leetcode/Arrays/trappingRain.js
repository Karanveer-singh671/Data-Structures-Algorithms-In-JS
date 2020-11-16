/*
Given an array of integers representing an elevation map where the width of each bar is 1,
return how much rainwater can be trapped

No distance between bars unless array has a 0


Verify Constraints: 
1. Do the left and right sides of the graph count as walls? No
2. Will there be negative integers? No, assume all positive

[0,1,0,2,1,0,3,1,0,1,2] = 8
[] = 0
[one_item] = 0
[3,4,3] = 0 (since can't use wall to trap water)

requires entire array to find solution
requires smaller of two walls but inside of walls can have blocked height depending on number within container
[5,0,3,0,0,0,2,3,4,2,1] = values
[0,1,2,3,4,5,6,7,8,9,10] = indexes
need to get the total water that can be stored at each index and sum them together
e.g if got the index 4 to calculate how much water we can store at that index
 we find the largest wall (value) to the left of that value and largest to the right of that current index value
 now the container will be the minimum of the left and right sides and we get the height at index 0
 if index 2 now we look for largest walls to left and right and do minimum of those two so min(5,4)
 gets us 4 and we know visually the total water will be 1 so we have to that - current height (index value)
since can't store water inside a wall
if total at current block after calculation is less than 0 then that current index value total water is 0
*/

// [0,1,0,2,1,0,3,1,0,1,2] = 8
function trapRainWaterBruteForce(array) {
	// T: O(n^2) S: O(1)
	let totalWater = 0;
	// want to go through each element to find that current elements water storage
	for (let i = 0; i < array.length; i++) {
		// set left and right pointers to start at the index on within the array
		let leftPointer = i;
		let rightPointer = i;
		let maxLeft = 0;
		let maxRight = 0;
		// have a loop to go all the way to left side and get the maxLeftValue
		while (leftPointer >= 0) {
			maxLeft = Math.max(maxLeft, array[leftPointer]);
			leftPointer--;
		}
		// have a loop to go all the way to right side and get the maxRightValue
		while (rightPointer < array.length) {
			maxRight = Math.max(maxRight, array[rightPointer]);
			rightPointer++;
		}
		// found left and right max now with respect to current value in the array
		// total area += min of two max walls  - current height ( if its greater than 0) since don't want to subtract total water storage
		const currentArea = Math.min(maxLeft, maxRight) - array[i];
		if (currentArea > 0) {
			totalWater += currentArea;
		}
	}
	return totalWater;
}

/*
Iterate pointers inward instead of outwards
2 Pointer logic left side of array and right side of array
based on some formula move either the left pointer up or right pointer down (why move left over the right and right over the left)
move the smaller value between the two pointers since only changing the minimum will change the value 
since don't have currentPointer either left or right pointer must take over that responsibility 
that pointer will be the one we calculate water for 
we have to check their respective maxLeft OR maxRight or update their total water if the current height is less than the 
max the area at the index can form a body of water then update total and move pointer
*/
//* [0,1,0,2,1,0,3,0,1,2]
function optimizedTrappingRain(array) { // T: O(n), S: O(1)
  // add if in the while loop used !== for left and right pointer 
  // if use left < right pointer in while loop don't need
  if(array.length === 0) {
    return 0
  }
	let totalWater = 0;
	let currentWater = 0;
	let maxLeft = 0;
	let maxRight = 0;
	let leftPointer = 0;
	let rightPointer = array.length - 1;
	// check that the left and right pointer are not on same index then keep operating on
	while (leftPointer !== rightPointer) {
		// check which is smaller value at left pointer or value at right pointer that's the one operate on
		if (array[leftPointer] <= array[rightPointer]) {
			// now check is the value at the left pointer smaller than the max left set maxLeft to max of the two values
			if (maxLeft < array[leftPointer]) {
				maxLeft = array[leftPointer];
				// leftPointer++;
			} else {
				// if maxLeft is greater than or equal to value form water body
				currentWater = maxLeft - array[leftPointer];
				totalWater += currentWater;
				// leftPointer++;
			}
			// can put leftPointer here so will always run inside this if
			leftPointer++;
		} else {
			if (maxRight <= array[rightPointer]) {
				maxRight = array[rightPointer];
				// rightPointer--;
			} else {
				currentWater = maxRight - array[rightPointer];
				totalWater += currentWater;
				// rightPointer--;
			}
			rightPointer--;
		}
	}
	return totalWater;
}
