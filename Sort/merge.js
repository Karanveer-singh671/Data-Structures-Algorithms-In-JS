const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
/** 
take a list and divide it in half

then divide subsets to half 

repeat until we have subsets of 1 time

then compare single subsets for order then get blocks of 2

then compare each block of 2 elements with each other using pointers to merge the array

repeat until array is fully merged

Divide and Conquer approach -> Recursion

Only have to compare local lists with each other not each element with each other element

Stable (duplicate elements -> will keep original order in the array)

O(n(log(n)) Time Complexity, O(n) Space Complexity

*/

function mergeSort(array) {
	// base case if 1
	if (array.length === 1 || array.length === 0) {
		return array;
	}
	// split array into left and right
	let length = array.length;
	let middle = Math.floor(length / 2);
	// slice (start included, end not included)
	let left = array.slice(0, middle);
	// array.slice(middle, length); or array.slice(middle);
	let right = array.slice(middle);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];
	let leftPointer = 0;
	let rightPointer = 0;
	// start pointers at first index of each respective array
	while (leftPointer < left.length && rightPointer < right.length) {
		if (left[leftPointer] < right[rightPointer]) {
			result.push(left[leftPointer]);
			leftPointer++;
		} else {
			result.push(right[rightPointer]);
			rightPointer++;
		}
  }
  // if e.g left array was less than everything in right array or some right elements left over and vice-versa 
  // then we take the result array and concat the left array from the slice left pointer left off 
  // and concat right array where right pointer ended 
  // if result is so far only left array -> slice will be at the end of the left array so we would have result + 
	// right pointer elements 
	
	// have some elements remaining after while loop execution 
	return result
		.concat(left.slice(leftPointer))
		.concat(right.slice(rightPointer));
}
