/*
Searching should be O(log(n)) by splitting the search space instead of linear search 
Binary Search works in sorted array. 
recursively call in subarray that is searching thru
*/

const binarySearch = (array, target) => {
	if (array.length === 0) {
		return false;
	}
	let length = array.length;
	let middle = Math.floor(length / 2);
	if (array[middle] === target) {
		return true;
	} else if (array[middle] > target) {
		binarySearch(array.slice(0, middle), target);
	} else {
		binarySearch(array.slice(middle + 1), target);
	}
	return false;
};
