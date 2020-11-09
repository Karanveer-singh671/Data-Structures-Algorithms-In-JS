// create function that reverses a string
function reverse(str) {
	// check input
	if (!str || str.length < 2 || typeof str !== "string") {
		// O(1) T.C
		return;
	}
	const outputArray = []; // O(n) for S.C and O(1) T.C
	for (let index = str.length - 1; index >= 0; index--) {
		// O(n) T.C
		outputArray.push(str[index]);
	}
	return outputArray.toString();
}

function reverse2(str) {
	// check input
	if (!str || str.length < 2 || typeof str !== "string") {
		// O(1) T.C
		return;
	}
  let arr = str.split("");
	let pointerBegin = 0;
	let pointerEnd = str.length - 1;
	while (pointerBegin < pointerEnd) {
		const temp = arr[pointerBegin];
		arr[pointerBegin] = arr[pointerEnd];
		arr[pointerEnd] = temp;
		pointerBegin++;
		pointerEnd--;
	}
	return arr.join("");
}
// es6
const reverse3 = (str) => [...str].split("").reverse().join("");
