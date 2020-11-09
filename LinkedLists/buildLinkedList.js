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
}

const myLinkedList = new LinkedList(10);
