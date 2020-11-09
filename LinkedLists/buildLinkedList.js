// 10 --> 5 --> 16
/** 
 const myLinkedList = {
	head: {
		value: 10,
		next: {
			value: 5,
			next: {
				value: 16,
				next: null,
			},
		},
	},
};
*/
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		// head property
		this.head = {
			value: value,
			next: null,
		};
		// tail should be set to the head since initially it will be null
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		// create a node with value and next pointer
		const newNode = new Node(value);
		// set tail.next to be newNode
		this.tail.next = newNode;
		// set tail to be newNode
		this.tail = newNode;
		this.length++;
	}
	prepend(value) {
		// non object oriented
		const newNode = {
			value: value,
			next: null,
		};
		// set newNodes next pointer to be the head
		newNode.next = this.head;
		// change the head to be the next node
		this.head = newNode;
		this.length++;
	}
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = {
			value: value,
			next: null,
		};
		const leader = this.traverseToIndex(index - 1);
		const leaderPointer = leader.next;
		leader.next = newNode;
		newNode.next = leaderPointer;
		this.length++;
	}
	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
	//*-*-*
	remove(index) {
		if (index >= this.length || index < 0) {
			return;
		}
		const leader = this.traverseToIndex(index - 1);
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;
		this.length--;
	}
	reverse() {
		if (!this.head.next) {
			return this.head;
		}
    let first = this.head;
    // setting tail to be first element since reversing
    this.tail = this.head
		let second = first.next;
		while (second) {
			// temp var to move pointer to next node at end of loop
			let temp = second.next;
			// move next pointer of the ahead element to point to the previous element
			second.next = first;
			// set the previous element to the next node since while loop going to second.next
			first = second;
			// move second up to next portion of loop will stop if null (tail)
			second = temp;
    }
    // head is still first elem before reversing so need ot set its next pointer to null
    this.head.next = null
    // set head to last element from the while loop (first elem of the reversed list)
    this.head = first
	}
}

const myLinkedList = new LinkedList(10);
