class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.array = [];
	}
	peek() {
		const lastItemIndex = this.array.length - 1;
		return this.array[lastItemIndex];
	}
	push(value) {
		this.array.push(value);
		return this;
	}
	pop() {
		this.array.pop();
		return this;
	}
}
