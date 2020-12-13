/*
Given an unsorted array, return the kth largest element. It is the kth largest element in sorted order,
not the kth distinct element

Constraints:
Can we get an array where k is larger than the array length? No, assume an answer is always available


Tail Recursion: O(1) space optimization instead of O(n) normal space complexity recursion 
Can write in JS for optimization but not understood by the JS engine so this optimization doesn't matter in this case
other languages matter
*/

/* recursive case 
need to keep each call on stack since each calls value is depending on the next recursive value
e.g 4!
factorial(4)
4 * factorial(3)
4 * (3 * factorial(2))
4 * (3 * (2 *factorial(1)))
4 * (3 * (2 * 1)) -> now use factorial 1 value in previous step and so on until get factorial 4

*/
const factorial = (n) => {
	if (n <= 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
};
/*
Tail recursive: 
tailRecursive(4)                            
tailRecursive(3,4)
tailRecursive(2,12)
tailRecursive(1,24)
tailRecursive(0,24) -> return 24
since don't need next recursion call's value for previous call stack value 
calculation then some languages remove that call off the stack and so don't need to store call on stack
O(1) 
*/
const tailRecursive = (n, amountSoFar = 1) => {
	if (amountSoFar === 0) {
		return amountSoFar;
	} else {
		return factorial(n - 1, amountSoFar * n);
	}
};

/*
Divide and Conquer:
1. Multi-branched Recursion -> want to call multiple times in each recursive call.
2. Breaks a problem into multiple smaller but same sub-problems. 
3. Combines the solutions of sub-problems into the solution for the original problem 
*/

/*
QuickSort:
In-place implementation, unlike mergeSort where we create a result array and concat the results  
since we know it is in-place sort we know we need pointers 
1. unsorted array
2. pick a pivot (e.g last element in the array)
3. pointer i and j start at index zero 
4. if value at j is smaller than our pivot element
5. swap i and j values and increment both the i and j pointer 
6. continue until we reach the pivotValue
7. now switch the pivot value with i 
8. break down the left of array from the swapped pivot value and the right array from the swapped pivot value
9. repeat for each subarray the same steps 
10. once we have single elements in the array 
11. we break down into two empty arrays then we know to stop 
11. combine solution of smaller sub arrays which will solve 
*/
// array, left (starting index of portion of array we care about), right (end of array that we care about)
/*
example [5,3,,1,6,4,2]
         0          5      these indexes are the start and end of where we want to perform quickSort
*/
const quickSort = (array, left, right) => {
	// nothing needs to be swapped because we are only sorting 1 element
	// and case where our left is greater than right just return the array
	if (left >= right) {
		return array;
	} else {
		// need to break array down to sub arrays using some partition element
		// partition being the pivot element in its final place after swap
		// because that is where we split the left and right to subArrays
		const partitionIndex = partition(array, left, right);
		// once value is received we want to break down into subProblems
		quickSort(array, left, partitionIndex - 1); // break down left of partitionIndex
		quickSort(array, partitionIndex + 1, right); // break down right of partitionIndex
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

const getKthLargest = (array, k) => { // T: O(n(log(n))) S: O(log(n))  space is dependent on how many recursive calls we have so since splitting into subproblems each time logn
	// since length is 1 greater than the array - k will get the kth largest
	// k = 2 [1,2,3,4,5] length = 5 - 2 = index at 3 gives value 4
	const indexToFind = array.length - k;
	quickSort(array, 0, array.length - 1); // array is sorted after this
	return array[indexToFind]; // this is the kth largest element 
};
