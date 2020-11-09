function mergeSortedArrays(arr1, arr2) {
	if (!arr1 && !arr2) {
		return;
	}
	if (arr1.length === 0) {
		return arr2;
	}
	if (arr2.length === 0) {
		return arr1;
  }
  // if large input need to use a static array (Define size on initialization) 
  // prevents copy array to new memory space vs dynamic 
	const totalSize = arr1.length + arr2.length;
	const mergedArray = new Array(totalSize);
	arr1Pointer = 0;
	arr2Pointer = 0;
	// if either array has an item to merge
	while (arr1[arr1Pointer] || arr2[arr2Pointer]) {
		// if the first array has more entries or arr1 pointer is less than arr2pointer
		if (!arr2[arr2Pointer] || arr1[arr1Pointer] < arr2[arr2Pointer]) {
			mergedArray.push(arr1[arr1Pointer]);
			arr1Pointer++;
		} else {
			mergedArray.push(arr2[arr2Pointer]);
			arr2Pointer++;
		}
	}
	return mergedArray;
}
