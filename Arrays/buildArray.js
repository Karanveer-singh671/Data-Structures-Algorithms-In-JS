// Arrays in JS are just objects with integer based keys that act like indexes
// static arrays you should specify size for larger inputs
class myArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}
	get(index) {
		return this.data[index];
	}
	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}
	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}
	delete(index) {
		const item = this.data[index];
		this.shiftItems(index);
	}
	shiftItems(index) {
		// shift from where the index starts
		// e.g insert in the middle of array then don't want to remap at the start just where inserted
		for (let i = index; i < this.length - 1; i++) {
			// shift all items 1 to the left by taking right hand value and assigning to left of it
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new myArray();
