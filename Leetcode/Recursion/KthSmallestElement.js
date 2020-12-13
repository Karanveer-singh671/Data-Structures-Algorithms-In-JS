/*
Hoare's QuickSelect algorithm
Question: find the kth smallest element in an unordered list
*/

const quickSelect = (array, left, right, indexToFind) => {
  /* T: O(n + n/2 + n/4 ...) converges -> O(2n) -> O(n)
  best case: assume we reduce half of our search space each time and only need to search thru half that need then a half of that etc.
  worst case though: pick smallest value or largest value then not splitting in half T: O(n^2)
  S: O(1) -> tail recursion since returning the call no need ot save previous call on the stack 
*/

	// nothing needs to be swapped because we are only sorting 1 element
	// and case where our left is greater than right just return the array
	if (left < right) {
		// need to break array down to sub arrays using some partition element
		// partition being the pivot element in its final place after swap
		// because that is where we split the left and right to subArrays
		const partitionIndex = partition(array, left, right);
		// partitionIndex === index to find then return the value at the partitionIndex
		if (partitionIndex === indexToFind) {
			return array[partitionIndex];
		} else if (partitionIndex > indexToFind) {
			// if partitionIndex is greater than index to find we only quickSelect from left side
			// no need to do other side since we know the element does not appear on that side
			return quickSelect(array, left, partitionIndex - 1);
		} else {
			return quickSelect(array, partitionIndex + 1, right);
		}
	}
	// since sorting the array in-place there is nothing to return
};
// passing same parameters since taking whole array of passed into that quickSort that is being called on
const partition = (array, left, right) => {
	const pivotValue = array[right]; // last value in array is pivot
	let partitionIndex = left; // start partitionIndex at the left (i pointer)
	// j pointer goes through array
	// and stop j when it reaches the right element (pivot)
	for (let j = left; j < right; j++) {
		// compare j value with pivot, value at j > pivotElement then swap positions
		if (array[j] > pivotValue) {
			// swap i and j value (since j value greater than the pivot)
			swap(array, partitionIndex, j);
			// j is already incremented in for loop
			// partitionIndex(i pointer) only increments after a swap occurs
			partitionIndex++;
		}
	}
	// reached pivot element now so switch i pointer (partitionIndex) and the pivotValue
	swap(array, partitionIndex, right);
	// return the partitionIndex because the original QuickSort is waiting to know where to split this array to its subArrays
	return partitionIndex;
};

const swap = (array, i, j) => {
	// temporary value we want to swap first so we don't lose reference to the value (partitionIndex)
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};
