class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	enqueue(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			// set first and last to be the new node
			this.first = newNode;
			this.last = newNode;
			this.length++;
		} else {
			// set the last's next to be the new Node since adding so point to new Node
			this.last.next = newNode;
			// set the last to be the new Node since it will be the new last
			this.last = newNode;
			this.length++;
			return this;
		}
	}
	dequeue() {
		if (!this.first) {
			return null;
		}
		if (this.first === this.last) {
			this.last = null;
		}
		// original first is now garbage collected
		this.first = this.first.next;
		this.length--;
		return this;
	}
}
