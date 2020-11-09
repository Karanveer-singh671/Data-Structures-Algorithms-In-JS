class DoublyLinkedList {
	constructor(value) {
		// head property
		this.head = {
			value: value,
			next: null,
			prev: null,
		};
		// tail should be set to the head since initially it will be null
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		// create a node with value and next pointer
		// const newNode = new Node(value);

		// non object oriented
		const newNode = {
			value: value,
			next: null,
			prev: null,
		};
		// point previous to tail before it is updated
		newNode.prev = this.tail;
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
			prev: null,
		};
		// set newNodes next pointer to be the head
		newNode.next = this.head;
		// set the head's prev pointer to be newNode
		this.head.prev = newNode;
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
			prev: null,
		};
		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		leader.next = newNode;
		// if leader.next is newNode then the previous of newNode is leader
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;
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
		const follower = leader.next;
		follower.prev = null;
		const aheadNode = follower.next;
		follower.next = null;
		leader.next = aheadNode;
		aheadNode.prev = leader;
		this.length--;
  }
}
