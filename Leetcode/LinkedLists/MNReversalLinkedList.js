/*
Given a linkedList and numbers m and n, return it back with only positions m to n in reverse
(Linked List positions start at 1)

Verify the constraints:
Will m and n always be within the bounds of the linked list? yes, assume 1<=m<=n<= length of linkedList
Can we receive m and n values for the whole linkedList? Yes we can receive the entire list using m and n positions


Test Cases:
1->2->3->4->5-> null, m = 2, n = 4  || 1->4->3->2-> 5
1->2->3->4->5-> null m = 1, n = 5   || 5->4->3->2->1->null
5, m=1,n=1
null, m=0, n=0
*/

/*
1. get current node 
2. store next value
3. update current.next to prev
4. set prev as current
5. set current to current.next

reversing a subsection of linkedList
1. keep a reference to a list so far before m. -> (m-1) when we reverse list the next value of m-1 should be head of linkedList
need to keep track of tail of linkedList since will point to n+1 since at that point the list will not be reversed

m - 1 (attach to head of reverse LinkedList)
m (start of reverse)
n (end of reverse) tail of reverse linkedList
n + 1 attach tail to this node

while < m
1. start = head 
2. current = head
3. current = current.next
4. currentPosition increment 
5. at end of loop we will have start = m - 1
6. currentNode = m (tail after reverse)
*/

const reverseBetween = (head, m, n) => {
	let start = head;
	let current = head;
	let position = 1;
	while (position < m) {
		start = current;
		current = current.next;
		position++;
	}
	// current = m  at this point and start = m - 1
	// tail = m since it will now be reversed and we want to set tail.next to be n + 1
	let tail = current;
	// now reverse Linked List
	let prev = null;
	while (position >= m && position <= n) {
		const next = current.next;
		current.next = prev;
		prev = current; // prev is the current list so far
		current = next;
		// increment the position
		position++;
	}
	// set start.next = prev since this is the entire reversed list
	start.next = prev;
	// now current = n + 1
	tail.next = current;
	if (m > 1) {
		return head;
	} else {
		return prev;
	}
};
