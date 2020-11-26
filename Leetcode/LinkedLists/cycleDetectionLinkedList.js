/*
Cycle detection in a linked list
*/

const findCycle = (head) => {
	// T: O(n), S:O(n)
	let current = head;
	// initialize a set so can find duplicates
	const seenNodes = new Set();
	// keep looping through L.L until we have a node we have seen before (cycle and that first node seen is where cycle starts)
	while (!seenNodes.has(current)) {
		// need to also check if next value exists because if next value is null then we have a tail and no cycle!
		if (current.next === null) {
			return false;
		}
		seenNodes.add(current);
		current = current.next;
	}
	// now exited while loop so the node we have right now is the start of cycle
	return current;
};

/*
Floyd Tortoise and Hare (slow and fast pointers)
if these two pointers meet then we know there is a cycle 
if the fast pointer or rabbit points to null or is null then we know there is no cycle in the LinkedList
hare keeps track if there is a cycle or not since it will point to null if exists 
*/
const findCycleOpt = (head) => {
	// T: O(n), S: O(n)
	let hare = head;
	let tortoise = head;
	// need to break out of while until either hare and tortoise are equal or hare is null
	while (true) {
		hare = hare.next;
		tortoise = tortoise.next;
		// no cycle in this case if there is a null value
		if (hare === null || hare.next === null) {
			return false;
		} else {
			// didn't break so increment hare by one
			hare = hare.next;
		}
		// check if hare and tortoise are overlapping now!
		if (tortoise === hare) break;
	}
	// broke out of while so pointers are equal where they meet
	let p1 = head;
	let p2 = tortoise;
	// need to find start of cycle
	while (p1 !== p2) {
		p1 = p1.next;
		p2 = p2.next;
	}
	// represents start of cycle return either p1 or p2
	return p1;
};
