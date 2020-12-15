/*
Resembles a complete binary tree (every single level full except last level and if there are nodes in last level
then the nodes are pushed as left as possible)
Min-Heap: Every node's children are greater than the parent -> Root node is the smallest value
Max-Heap:Every node's children both left and right are smaller than parent -> Root node is greatest value in the Heap

A max heap represented in an array 

[50,40,25,20,35,10,15]      ->       Getting any node's Parent Formula: Floor((index - 1) / 2)
 0  1  2  3  4  5  6        ->       Getting the left child of a Node Formula: (Index * 2) + 1
                            ->       Getting the right child of a Node Formula: (Index * 2) + 2
 

Insertion in Max Heap: if using an array -> push value at end of array (BFS) then compare   -> O(log(n)) since just sift up branch height of tree 
newly inserted node index and try to find proper position check parent formula 
if newly inserted node is greater than the value at the index of the parent's position
swap the values at those indexes 
repeat this until newly inserted node is smaller then stop execution
Getting any node's Parent Formula: Floor((index - 1) / 2)

Deletion in a Max Heap: remove root value, now need to maintain rule that root is largest but also complete binary tree   -> O(log(n)) since just sift down so height of tree
so we take rightmost value at the last level then put it in place of root then sift that value down to correct position 
compare both left and right children of the node, switch root with whatever child is greater 
 Getting the left child of a Node Formula: (Index * 2) + 1
 Getting the right child of a Node Formula: (Index * 2) + 2
 compare values at both

 Priority Queue: in this case just higher value greater priority 
*/

class PriorityQueue {
	// make it easily interchangeable between min and max heap
	constructor(comparator = (a, b) => a > b) {
		// make private using underscore convention
		this._heap = [];
		this._comparator = comparator;
	}

	size() {
		return this._heap.length;
	}
	isEmpty() {
		return this.size() === 0;
	}
	// root value in heap
	peek() {
		return this._heap[0];
	}
	push(value) {
		this._heap.push(value);
		this._shiftUp();
		return this.size();
	}

	_shiftUp() {
		let nodeIndex = this.size() - 1;
		while (nodeIndex > 0 && this._compare(nodeIndex, this._parent(nodeIndex))) {
			// need to swap if greater than
			this._swap(nodeIndex, this._parent(nodeIndex));
			nodeIndex = this._parent(nodeIndex);
		}
	}
	_shiftDown() {
		let nodeIndex = 0;
		// left child we get back is within the size of the array we get back then compare the left child and currentIndex
		// right child we get back is within the size of the array we get back then compare the right child and currentIndex
		while (
			this._leftChild(nodeIndex) < this.size() &&
			this._compare(
				this._leftChild(nodeIndex, nodeIndex) ||
					(this._rightChild(nodeIndex) < this.size() &&
						this._compare(this._rightChild(nodeIndex, nodeIndex)))
			)
		) {
			const greaterNodeIndex = this._rightChild(nodeIndex) < this.size();
			// if right child exists and greater than the left
			this._compare(this._rightChild(nodeIndex), this._leftChild(nodeIndex))
				? this._rightChild(nodeIndex)
				: this._leftChild(nodeIndex);
			this._swap(greaterNodeIndex, nodeIndex);

			nodeIndex = greaterNodeIndex;
		}
	}
	pop() {
		// can't shift because that is O(n)
		// swap first O(1)
		if (this.size() > 1) {
			swap(0, this.size() - 1);
			// then pop O(1)
			const poppedValue = this._heap.pop();
		}
		this._shiftDown();
		return poppedValue;
	}
	_parent(index) {
		return Math.floor((index - 1) / 2);
	}
	_leftChild(index) {
		return index * 2 + 1;
	}
	_rightChild(index) {
		return index * 2 + 2;
	}
	_swap(i, j) {
		const temp = this._heap[i];
		this._heap[i] = this._heap[j];
		this._heap[j] = temp;
	}
	_compare(i, j) {
		return this._comparator(this._heap[i], this._heap[j]);
	}
}
