/*
Palindrome: is a string that reads the same forwards and backwards
"" - same reading forward and backward
"oneLetter" - same reading forward and backward
remove spaces, commas, lowercase to get equivalent for pattern matching 
Even number of letters
Odd number of letters

3 ways:

Pointer on left side and pointer on right side
pointers in the middle and move them outward
have a string and create new string of original reversed
then compare character by character until length of array

Question: Given a string, determine if it is a Palindrome,
considering only alphanumeric character and ignoring case sensitivity.

Verify the Constraints:

Test cases:
"" -> true,
"a" -> true,
"aabaa" -> true,
"aabbaa" -> true,
"abc" -> false,
"A man, a plan, a canal: Panama" -> true
*/

export const isValidPalindromeOutsideSlidingWindow = (s) => {
	// remove symbols, spaces, colons, capital letters etc. Regex expression
	s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	if (s.length <= 1) {
		return true;
	}
	// initialize left and right pointers at start and end of string
	let start = 0;
	let end = s.length - 1;

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

const isValidPalindromeCenterSlidingWindow = (s) => {
	s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	// start strings at center assuming odd they start at same index
	let left = Math.floor(s.length / 2);
	let right = left;
	// if even need to move left down by 1
	if (s.length % 2 === 0) {
		left--;
	}

	while (left >= 0 && right <= s.length) {
		if (s[left] !== s[right]) {
			return false;
		} else {
			left--;
			right++;
		}
	}
	// if it doesn't fail in loop then it is valid
	return true;
};

const isValidPalindromeReverseString = (s) => {
	s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
	let reverse = "";

	// start for loop backwards
	for (let i = s.length - 1; i >= 0; i--) {
		reverse[i] += s[i];
	}
	return reverse === s;
};
