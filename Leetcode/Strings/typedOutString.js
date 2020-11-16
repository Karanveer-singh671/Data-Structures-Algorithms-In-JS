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
	const finalS = buildString(S);
	const finalT = buildString(T);
	if (finalS.length !== finalT.length) {
		return false;
	} else {
		for (let i = 0; i < finalS.length; i++) {
			if (finalS[i] !== finalT[i]) {
				return false;
			}
		}
	}
	// if it doesn't fail then these strings are equal (will return true if empty strings too!)
	return true;
};
