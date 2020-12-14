/*
Searching should be O(log(n)) by splitting the search space instead of linear search 
Binary Search works in sorted array. 
recursively call in subarray that is searching thru
*/

const binarySearchRecursive = (array, target) => {
	if (array.length === 0) {
		return false;
	}
	let length = array.length - 1;
	let middle = Math.floor(length / 2);
	if (array[middle] === target) {
		return middle;
	} else if (array[middle] > target) {
		binarySearch(array.slice(0, middle), target);
	} else {
		binarySearch(array.slice(middle + 1), target);
	}
	return false;
};

/*
Given an array of integers sorted in ascending order, return the starting and ending index of a Given
target value in an array, i.e. [x,y]

Your solution should run in O(log(n)) time 

Binary search since said O(log(n)) also says sorted in ascending so O(log(n))

Verify the constraints:
what do we return if the target is not found in the array? return -1, all values in the array are positive. 

Test case:
[1,3,3,5,5,5,8,9] target = 5 => [3,5]

[1,2,3,4,5,6] => target = 4 -> [3,3]

[1,2,3,4,5] -> target = 7 -> [-1,-1]

[] -> target = 3 -> [-1,-1]

*/
/*
const startAndEndOfTarget = (array, target) => { // T: O(n) time in the case where our array only contains our target value
	if (array.length === 0) {
		return [-1, -1];
	}
	let length = array.length - 1;
	let middle = Math.floor(length / 2);
	if (array[middle] === target) {
		let i = middle;
		let j = middle;
		while (array[middle] === array[i]) {
			i--;
		}
		// i is now not equal to the index meaning we have to return i + 1 for the start
		while (array[middle] === array[j]) {
			j++;
		}
		// now j is not equal to the index meaning we have to return j - 1
		return [i + 1, j - 1];
	} else if (array[middle] > target) {
		binarySearch(array.slice(0, middle), target);
	} else {
		binarySearch(array.slice(middle + 1), target);
	}
	return [-1, -1];
};
*/

const binarySearchIterative = (nums, left, right, target) => {
	// T: O(n) time in the case where our array only contains our target value
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const foundValue = nums[mid];
		if (foundValue === target) {
			return mid;
		} else if (foundValue < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
};

const searchRange = (nums, target) => { // S: O(1), T: O(log(n))
	if (nums.length === 0) {
		return [-1, -1];
	}
	const firstPosition = binarySearchIterative(nums, 0, nums.length - 1, target);
	if (firstPosition === -1) {
		return [-1, -1];
	}
	// store startPosition as first instance of target found same for endPosition
	let startPosition = firstPosition;
	let endPosition = firstPosition;
	let temp1;
	let temp2;
	// keep going while start position is not -1
	while (startPosition !== -1) {
		// store the previous start position so we don't lose reference to it
		temp1 = startPosition;
		// search for more target values to left of firstPosition search space is 1 to the left of the first solution of target we found
		startPosition = binarySearchIterative(nums, 0, startPosition - 1);
	}
	// while loop ends when returned -1 meaning there is no more solutions to the left
	// this also means startPosition is -1 so we want to set our start position to be the temp
	startPosition = temp1;

	while (endPosition !== -1) {
		temp2 = endPosition;

		endPosition = binarySearchIterative(nums, endPosition + 1, nums.length - 1);
	}
	endPosition = temp2;

	return [startPosition, endPosition];
};
