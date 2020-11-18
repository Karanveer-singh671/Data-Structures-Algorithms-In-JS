/*
Question: Given a string, determine if it is almost a palindrome. A string is almost a palindrome if 
it becomes a palindrome by removing 1 letter. Consider only alphanumeric characters and ignore case sensitivity

Verify the constraints:
Do we consider a palindrome as almost a palindrome? Yes, if it is already a palindrome 

TestCases:
"raceacar" -> true 
"abccdba" -> true 
"abcdefdba" -> false 
"" -> true
"a" -> true
"ab" -> true
*/
const isAlmostPalindrome = (s) => {
	// T: O(n), S: O(1)
	if (s.length <= 2) {
		return true;
	}
	let start = 0;
	let end = s.length - 1;
	while (start < end) {
		if (s[start] !== s[end]) {
			// shift pointers by 1 character so not included (removed) if either return true then it is valid subPalindrome
			return (
				validSubPalindrome(s, start + 1, end) ||
				validSubPalindrome(s, start, end - 1)
			);
		} else {
			start++;
			end--;
		}
	}
	return true;
};
// don't need to check all string just string at not equal and within since rest was a palindrome
// just check where start and end is
const validSubPalindrome = (s, start, end) => {
	while (start < end) {
		if (s[start] !== s[end]) {
			return false;
		} else {
			start++;
			end--;
		}
	}
	return true;
};
