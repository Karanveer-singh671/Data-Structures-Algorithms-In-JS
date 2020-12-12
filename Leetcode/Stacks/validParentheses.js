/*
Given a string containing only parentheses, determine if it is valid. The string is valid if all parentheses close.

edge case: empty string -> true
*/

const validParanthesis = (s) => { // S: O(n), T: o(n)
	if (s.length === 0) {
		return true;
	}
	let stack = [];
	let hashMap = {
		"{": "}",
		"[": "]",
		"(": ")",
	};
	let leftBracket = "";
	for (let i = 0; i < s.length; i++) {
		// if it is a left bracket then insert into stack
		// matched left bracket since returned a value
		if (hashMap[s[i]]) {
			// push that left bracket into array
			stack.push(s[i]);
		} else {
			// if right bracket, pop last elem out of stack
			leftBracket = stack.pop();
			// compare the left bracket and make sure it is equal to the corresponding closing bracket
			if (hashMap[leftBracket] !== s[i]) {
				return false;
			}
		}
	}
	// after for loop if stack is not empty -> not equal number of closing brackets to opening brackets
	// if (stack.length === 0) {
	// 	return true;
	// } else {
	// 	return false;
	// }
	return stack.length === 0;
};
