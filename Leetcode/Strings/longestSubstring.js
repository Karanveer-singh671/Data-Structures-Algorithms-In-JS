/*
more advanced version of two pointer technique -> sliding window

Question: 
Given a string, find the length of the longest substring without repeating characters 

Verify the constraints:
Q1: is the substring contiguous? Yes, look for a substring and not a subsequence 
(substring vs subsequence)
contiguous: characters are sequential and no breaks in between
Distinction:
substrings have no breaks in between them (sequential therefore contiguous) e.g 'abcbbd' would be 'abc' substring
subsequence can have breaks in between the letters e.g 'abcbbd' unique subsequence: 'abcd' 
Q2: does case sensitivity matter? no, assume all characters in string are going to be lower case

Test Cases:
"abccabb" -> "abc" or "cab" longest substring length = 3 to return
"ccc" -> length = 1
"" -> length = 0
"abcbda" -> "abc" but overlap of "cbda" so length = 4
*/

function longestSubstring(s) {}

function longestSubstringBruteForce(s) {
	// T: O(n^2), S: O(n)
	// 0 or 1 case faster to do this check
	if (s.length <= 1) {
		return s.length;
	}
	let longest = 0;
	for (let left = 0; left < s.length; left++) {
		// create hashmap to see characters seen and reset when encounter duplicate
		let seenChars = {};
		let currentLength = 0;
		// right pointer starts wherever left pointer is
		for (let right = left; right < s.length; right++) {
			const currentChar = s[right];
			// if haven't seen increment currentLength and set the character to true as in seen
			// do a check to see if current is greater than longest
			if (!seenChars[currentChar]) {
				currentLength++;
				seenChars[currentChar] = true;
				longest = Math.max(currentLength, longest);
			} else {
				break;
			}
		}
	}
	return longest;
}
