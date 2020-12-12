// Implement a function that takes an array of zeros and ones and should return true if there is exactly one continuous set of zeros.
// For example [0,0,1,1] should return true, [1,0,0,0,0,1,0] should return false.

/*
[0] -> true
[] -> false
[0,0,1,1] -> true
[1,0,0,0,0,1,0] -> false

*/

// const continuous = (arr) => {
// 	if (!arr) {
// 		return false;
// 	}
// 	let seenZero = false;
// 	let seenOne = false;
// 	for (let i; i < arr.length; i++) {
//     if (seenZero && seenOne && arr[i] === 0) {
// 			console.log("false");
// 			return false;
// 		}
// 		 else if (arr[i] === 0) {
// 			seenZero = true;
// 			console.log(seenZero);
// 		}
// 		else if (arr[i] === 1 && seenZero) {
// 			seenOne = true;
// 			console.log(seenOne);
// 		}
// 	}
// 	// if passed all thru and didn't return false then array is good
// 	return true;
// };
// console.log(continuous([1, 0, 0, 0, 0, 1, 0]));

// Implement a function that takes an array of zeros and ones and should return true if there is exactly one continuous set of zeros.
// For example [0,0,1,1] should return true, [1,0,0,0,0,1,0] should return false.

const cont = (arr) => { // S: O(1) T: O(n)
	let hasSeenOne = false;
	let hasSeenZero = false;

	if (!arr.length) return false;

	for (let i = 0; i < arr.length; i++) {
		if (hasSeenZero && hasSeenOne && arr[i] === 0) {
			return false;
		}
		if (arr[i] === 0 && !hasSeenZero) {
			hasSeenZero = true;
		}

		if (arr[i] === 1 && hasSeenZero && !hasSeenOne) {
			hasSeenOne = true;
		}
	}

	return hasSeenZero;
};

console.log(cont([1, 0, 0, 0, 0, 1]));
