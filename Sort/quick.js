const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
/**
 Pick a random item -> pivot item

now compare each number to the pivot and all elements smaller than the pivot 
go to left of pivot and all elements greater than pivot go to right of it (swap elements)
now we know once this iteration is done all elements to the right of pivot will be bigger than every element to the left of the pivot
Split the elements to left of pivot into new sub array and repeat pivot creation and comparison same for right until lists are sorted
 */

function quickSort(array, left, right) {
	const length = array.length;
	let pivot;
	let partitionIndex;

	if (left < right) {
		pivot = right;
		partitionIndex = partition(array, pivot, left, right);

		//sort left and right
		quickSort(array, left, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, right);
	}
}

function partition(array, pivot, left, right) {
	let pivotValue = array[pivot];
	let partitionIndex = left;

	for (let i = left; i < right; i++) {
		if (array[i] < pivotValue) {
			swap(array, i, partitionIndex);
			partitionIndex++;
		}
	}
	swap(array, right, partitionIndex);
	return partitionIndex;
}

// swap function for switching two elements
function swap(array, firstIndex, secondIndex) {
	let temp = array[firstIndex];
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
