//#1 - Sort 10 schools around your house by distance:
//* InsertionSort (good with small sorting amount and O(1) Space, data could be nearly sorted since 10 choices)
//#2 - eBay sorts listings by the current Bid amount:
//* Radix or counting sort (good for restricted range of integers)
//#3 - Sport scores on ESPN
//* QuickSort (most efficient, and low chance scores are already sorted, and has O(log(n)) Space compared to MergeSort O(n))
//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//* MergeSort (since such a large database cannot risk a O(n^2) like quickSort runtime even if space complexity is O(n) compared to O(log(n)))
//* MergeSort is O(n(log(n))) worst case
//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//* InsertionSort (most data is already sorted and only added 2 reviews, better than any other sort if data is mostly sorted)
//#6 - Temperature Records for the past 50 years in Canada
//* radix or counting sort (if temperature has no decimal places since then would be integer number between a small range non comparison sort)
//* is better based off how numbers stored in memory
//* if want decimal places for temperature cannot use non-comparison sorts, instead use QuickSort (O(log(n))) space and most likely won't hit worst case already sorted or choosing largest or smallest number
//#7 - Large user name database needs to be sorted. Data is very random.
//* QuickSort (if memory is expensive since MergeSort is O(n) space, not likely to hit worst case since data is random)
//#8 - You want to teach sorting for the first time
//* BubbleSort & SelectionSort (easiest to understand)