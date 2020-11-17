/*
more advanced version of two pointer technique -> sliding window

Question: 
Given a string, find the length of the longest substring without repeating characters 


String subproblem questions: A subproblem is a problem we have to solve along the way to solving the main problem
Main problem: find the length of the longest unqiue substring
Sub problem: Pattern Matching  - unique substring


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

/*
Optimize: Sliding window
Form a window over some portion of sequential data, then move that window throughout the data to capture different
parts of it
good for strings and arrays since they both capture data in some sequetial order
and good when ask for contiguous in question
1. Use a sliding window to present the current substring
2. size of window will change based on new characters, and characters we have already seen before
3. our seen character hashmap keeps track of what character we've seen, and indexes we saw them at
*/

function longestSubstring(s) {
	// T: O(n), S: O(n) (worst case unique string have to store whole string)
	if (s.length <= 1) {
		return s.length;
	}
	// left pointer represents the current substring we are building out
	let left = 0;
	let seen = {};
	let length = 0;

	for (let right = 0; right < s.length; right++) {
		// check current character
		const currentChar = s[right];
		// if the character exists in the map store the index as a value or undefined
		const prevSeenChar = seen[currentChar];
		// if this value has been seen in the hashmap undefined will be false and its value is greater than the left
		// left pointer should be moved to that prevSeenChar index + 1 since want to start at the letter after the duplicated one
		if (prevSeenChar >= left) {
			left = prevSeenChar + 1;
		}
		seen[currentChar] = right;
		// length of current substring is going to be the right - left index and + 1 since index start at 0
		length = Math.max(length, right - left + 1);
	}
	return length;
}

function longestSub(s) {
  if (s.length <= 1) return s.length;
  left = 0
  seen = {}
  longest = 0
  for (let right = 0; right < s.length; right++) {
    const currentCharacter = s[right];
    // check if character has been seen
    alreadySeen = seen[currentCharacter] // return undefined or index
    // check if the value has been seen and its index is higher than left if it is we want to move left to 
    // 1 + that index value since it was already seen the new longest substring has to been ahead of the character
    // that caused it to be duplicated
    if(alreadySeen >= left) {
      left = alreadySeen + 1
    }

    // set the value of the character as the index
    seen[currentCharacter] = right
    // longest will either be previous value or the current substring length 
    longest = Math.max(longest, right - left + 1)
  }
  return longest
}

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
