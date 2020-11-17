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

const optimalAlmostValidPalindrome = (s) => {
	if (s.length <= 2) {
		return true;
	}
};
