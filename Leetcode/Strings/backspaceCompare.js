/*
Strings can be seen as arrays (each character in string is value in array) difference is 
strings is more pattern matching compared to arrays

//* Question: Given two strings S and T, return if they equal when both are typed out. Any '#' that 
//* appears in the string counts as a backspace.

Verify Constraint:
What happens when two #'s appear beside each other? delete the two values before the first #
What happens to # when there is no character to remove? It deletes nothing then just like backspace would
Are two empty strings equal to each other? Yes, consider two empty strings as equal 
Does case sensitivity matter? Yes it does, "a" does not equal "A"

examples:
S:"ab#z", T: "az#z" -> True
S: "4abc#d", T: "acc#c" -> False                                                  
S: "x#y#z#", T:"#" -> True (both empty string returned)
S: "a###b", T: "b" -> True
S: "Ab#z", T: "ab#z" => false ("Az" !== "az")
*/
// since building and comparing are two separate functionality and have to build both arrays
// Use helper function to return array that represents final characters not removed so won't repeat code
const buildString = function (string) {
	// T: O(n), S: O(n)
	const builtArray = [];
	for (let i = 0; i < string.length; i++) {
		if (string[i] !== "#") {
			builtArray.push(string[i]);
		} else {
			builtArray.pop();
		}
	}
	return builtArray;
};
//* write if checks for if the strings don't match and return false so when decide to return true we know
//* there aren't cases where it could've failed
const backspaceCompare = function (S, T) {
	// T: O(S + T), S: O(S + T)
	const finalS = buildString(S); // T: O(size S) WORST CASE IF THERE WAS NO FILTERING DONE
	const finalT = buildString(T); // T: O(size T) WORST CASE IF THERE WAS NO FILTERING DONE
	if (finalS.length !== finalT.length) {
		return false;
	} else {
		for (let i = 0; i < finalS.length; i++) {
			//T: O(size S or size T)
			if (finalS[i] !== finalT[i]) {
				return false;
			}
		}
	}
	// if it doesn't fail then these strings are equal (will return true if empty strings too!)
	return true;
};

/*
Can we optimize solution: 
our time complexity is already good but space can be improved
2 pointers and start comparison at end of each string since hashtag will delete the element before
since backspaced so doesn't make sense to compare that way instead compare from the end of strings
our question says return true or false not return the modified array if true so that's a hint at might not need
*/
//* Wrong 84/110 passed
// const s = "y#fo##f"
// const t ="y#fx#o##f"
// const backspaceCompareOptimalSpace = function(s,t) {
// 	let sPointer = s.length - 1
// 	let tPointer = t.length - 1
// 	let counterS = 0
// 	let counterT = 0
// 	while(s[sPointer] || t[tPointer]) {
// 		// add 2 to S counter if # and decrement
// 		if(s[sPointer] === "#") {
// 			counterS += 2
// 			sPointer--;
// 			counterS -= 1
// 		}
// 		if(t[tPointer] === "#") {
// 			counterT += 2
// 			tPointer--;
// 			counterT-= 1
// 		}
// 		if(counterS > 0 && s[sPointer] !== "#") {
// 			sPointer--;
// 			counterS--
// 		}
// 		if(counterT > 0 && t[tPointer] !== "#") {
// 			tPointer--;
// 			counterT--
// 		}
// 		if(s[sPointer] !== t[tPointer] && counterS === 0 && counterT === 0) {
// 			return false
// 		}
// 		if(s[sPointer] === t[tPointer] && counterS === 0 && counterT === 0) {
// 			sPointer--;
// 			tPointer--;
// 		}
// 	}
// 	console.log({counterS, counterT, sPointer, tPointer})
// 	return true
// }
// console.log(backspaceCompareOptimalSpace(s,t))

const backspaceCompare = function (s, t) {
	// T: O(size s + size t), S: O(1)
	let p1 = s.length - 1;
	let p2 = t.length - 1;
	while (p1 >= 0 || p2 >= 0) {
		// if either is a hash do not want to compare and want to instead move pointers
		if (s[p1] === "#" || t[p2] === "#") {
			if (s[p1] === "#") {
				// how much need to move p to the left
				let backCount = 2;
				// as long as backCount is > 0 we need to decrement the pointer by 1 and backcount by 1
				// and each time check if the value is a hash and if it is then need to add two to backount
				// need while inside if check because want to finish this code before moving since want count
				while (backCount > 0) {
					p1--;
					backCount--;
					if (s[p1] === "#") {
						backCount = backCount + 2;
					}
				}
			}
			if (t[p2] === "#") {
				// how much need to move p to the left
				let backCount = 2;
				// as long as backCount is > 0 we need to decrement the pointer by 1 and backcount by 1
				// and each time check if the value is a hash and if it is then need to add two to backount
				//
				while (backCount > 0) {
					p2--;
					backCount--;
					if (t[p2] === "#") {
						backCount = backCount + 2;
					}
				}
			}
		}
		// now if a regular character
		else {
			// now strings are not same at this character
			if (s[p1] !== t[p2]) {
				return false;
			} else {
				p1--;
				p2--;
			}
		}
	}
	return true;
};
