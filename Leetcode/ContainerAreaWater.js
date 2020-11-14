/*
You are given an array of positive integers where each integer represents the height of a vertical line
on a chart. Find two lines which together with the a-axis forms a container that would hold the greatest amount 
of water. Return the area of water it would hold.
*/
//* Constraints:
//* Does the thickness of the lines affect the area (no assume they take up no space and represent height of container)
//* Do the left and right sides of the graph count as walls (no sides can't be used to form container only values from array)
//* Does a higher line inside our container affect our area (e.g 7 and 6 container spread across 4 values and 8 in the middle) (no)

/* 
Area  = Length x Width [7,1,2,3,9], 
Length = smaller of two lines forming container = 7
Width = index of right of container - index of left of container 
[] = 0
[one item] = 0 
[6,9,3,4,5,8] try 6 = L, and W = 5 - 0 A = 30, 8 = L and width = 5 - 1 = 32
*/

//* Brute Force Solution (find answer that is max of all possible solutions since looking for 'greatest')

//* area = L x W
//* min of two lines is Length x Width (index right of container  - index of left of container)
//* min(a,b) x (bi - ai)
//* maxArea = 0

function mostWaterArea(array) {
	// T: O(n^2), S: O(1)
	let maxArea = 0;
	let currentArea = 0;
	//* Don't need because if 1 element or 0 element will not go into second loop and just return 0
	// if (array.length <= 1) {
	// 	return 0;
	// }
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			currentArea = Math.min(array[i], array[j]) * (j - i);
			// maxArea = Math.max(maxArea, currentArea)
			if (currentArea > maxArea) {
				maxArea = currentArea;
			}
		}
	}
	return maxArea;
}

/* 
Only move the minimum and have two pointers since reducing the width since shifting pointers
must increase the Length (minimum of pointers) need to be moved for us to have a chance to get a larger 
value (since the width calculation will be getting smaller!)
//* we know that if the width is getting smaller on pointer incrementing (left side) or decrementing right side
//* the only way area will get bigger is if the minimum changes 
//* start pointer and end pointer and move the pointer that has the smaller value since that will result in a value
//* that can possibly change the maxArea
*/

function maxAreaOptimal(array) {
	let maxArea = 0;
	let start = 0;
	let end = array.length - 1;
	while (start !== end) {
		currentArea = Math.min(array[start], array[end]) * (end - start);
		maxArea = Math.max(currentArea, maxArea);
		if (array[start] < array[end]) {
			start++;
		} else {
			end--;
		}
	}
	return maxArea;
}
