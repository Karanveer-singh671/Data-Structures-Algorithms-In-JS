/*
Question: Given a string only containing round brackets '(' and ')' and lowercase characters, remove the least
amount of brackets so the string is valid.

if has brackets in a string -> think about stack 
A string is considered valid if it is empty or if there are bracket, they all close.

"a)bc(d)" -> "abc(d)"
"(ab(c)a" -> can be either "ab(c)a" or "(abc)a" both valid just need to return one of them 
"))((" -> ""

verify constraints: what do we return from algorithm -> return a valid string w/ fewest brackets removed 
will there be spaces in the string? No, the string only contains lowercase characters, "(" and ")"
is a string containing only lowercase characters valid? Yes don't need brackets to be a valid string
*/

const minBracketToRemove = (s) => {
	// s: O(n), T: O(n)
	s = s.split("");
	// empty string is already valid
	if (s.length === 0) {
		return true;
	}
	let stack = [];
	// go through each element and if it is a bracket check if it is an opening bracket and if it is a closing bracket instead
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			// store index of opening bracket
			stack.push(i);
			// if closing and stack has opening braces pop
		} else if (s[i] === ")" && stack.length) {
			stack.pop();
			// else if closing brace and nothing in stack set value to empty string
		} else if (s[i] === ")") {
			s[i] = "";
		}
	}
	// if stack is not empty then need to keep popping while stack length exists
	while (stack.length) {
		// pop out opening brace of the stack
		const pop = stack.pop();
		// popped elem is an index so remove that value from s by setting to ""
		s[pop] = "";
	}
	return s.join("");
};
