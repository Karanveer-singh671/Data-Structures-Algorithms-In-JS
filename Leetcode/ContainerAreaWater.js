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
	let maxArea = 0;
  let currentArea = 0;
  if(array.length <= 1) {
    return 0
  }
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			currentArea = Math.min(array[i], array[j]) * (j - i);
			if (currentArea > maxArea) {
				maxArea = currentArea;
			}
		}
	}
	return maxArea;
}
