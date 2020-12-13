/*
Implement the class Queue using stacks. The queue methods you need to implement are enqueue, dequeue, peek and empty.
enqueue: append to end of the Queue
dequeue: remove value at the start of the queue
peek: return the value at the start of the Queue
empty: return boolean of whether queue is empty

verify constraints: do the queue methods we have to implement need to perform at the same complexity of a real queue?
Answer: no but they should be as optimal as possible
*/

class QueueWithStacks {
	constructor() {
		// initialize two stacks
		this.in = [];
		this.out = [];
	}
	enqueue(val) {
		// enqueue of queue is same as insertion in a stack
		this.in.push(val);
	}
	dequeue() {
		// FIFO

		// dequeue will be the out stack if it is empty we need to pop and insert to out and then pop last elem of out stack
		if (this.out.length === 0) {
			while (this.in.length !== 0) {
				this.out.push(this.in.pop());
			}
			// now have pushed all values in reverse in the out stack
			// popping last elem out will result removing first from a queue since reversed
		}
		// if there are already values in out stack just pop them out
		return this.out.pop;
	}

	empty() {
    // when both the in stack and out stack are equal to zero then the queue is empty 
		return this.in.length === 0 && this.out.length === 0;
	}
	peek() {
		// check value at beginning of queue === check last value of the out stack
		// do not remove from the stack just check the value
		// if the out queue is empty then we need to push in every popped value from the in stack!
		if (this.out.length === 0) {
			while (this.in.length !== 0) {
				this.out.push(this.in.pop());
			}
		}
		// if the length is over 0 then just return the last value of out stack
		return this.out[this.out.length - 1];
	}
}
