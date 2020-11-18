/*
When you get or return a linkedList you are always returning the head.

Question: Given a linked list, return it in reverse

Verify the Constraints: 
What do we return if get null or a single node? Just return null and the node back respectively

Test Cases:
null -> null
single_node -> single_node
1->2->3->4->null   ||  4->3->2->1->null 

When we write out function we only get the head node (don't know length of the linkedList) there may or may not
be any additional nodes attached to them.
Need to implement an iterative technique and do something at a node and move to next node
*/
//* Template
function LinkedList(head) {
	let currentNode = head;
	while (currentNode) {
		// PERFORM OPERATION

		// traverse to next node in the list, will stop when reach null (tail pointer)
		currentNode = currentNode.next;
	}
}

/*
Need to first store the next node in a variable before break pointer since we will lose reference to it and it will
be garbage collected in that case. Then need to store previous so we know the linked list we stored so far
else if just set current to next we would lost the list we were making before

1->2->3->4->5->null 
*/

function reverseLinkedList(head) {
	if (!head.next) {
		return head;
	}
	let current = head;
	let prev = null;
	while (current) {
		let next = current.next; // will store 2 first iteration since if just set current.next to prev we have 2->null and lose 2 reference
		current.next = prev; // 1 stores a pointer to -> null since setting the current pointer to null, on second interation will set 2's next value to 1->null so 2->1->null
		prev = current; // LinkedList we have built so far as previous variable 1->null 
		current = next; // set 2 to be the current 
  }
  // return linkedList built so far, if head doesn't exist it will return null as well
	return prev;
}
