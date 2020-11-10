class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek() {
		return this.top;
	}
	pop() {
    // 0 items case
		if (this.length === 0) {
      return;
      // 1 item case
    } 
    if (this.top === this.bottom) {
      // set bottom to null 
			this.bottom = null;
    } 
      // 1 item or more case 
			// store reference of top item since returning it
			const poppedItem = this.top;
			// set new top to be the next one down since popping item
			this.top = this.top.next;
			this.length--;
			return poppedItem;
		
	}
	push(value) {
		const newNode = new Node(value);
		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			// keep pointer to current top
			const holdingPointer = this.top;
			// set new Node to the top
			this.top = newNode;
			// set the new node's next to be the old top next since going down the stack points to old top
			this.top.next = holdingPointer;
		}
		this.length++;
		return this;
	}
}
