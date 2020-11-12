class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}
	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
			return this;
		} else {
			const currentNode = this.root;
			while (true) {
				if (value < currentNode.value) {
					// go left if there is a left child of currentNode else insert there
					if (!currentNode.left) {
						currentNode.left = newNode;
						return this;
					}
					currentNode = currentNode.left;
				} else {
					// go right
					if (!currentNode.right) {
						currentNode.right = newNode;
						return this;
					}
					currentNode = currentNode.right;
				}
			}
		}
	}
	lookup(value) {
		if (!this.root) {
			return false;
		}
		if (this.root === value) {
			return this.root;
		}
		let currentNode = this.root;
		// while we have a node to traverse since if we don't have any nodes left to traverse we didn't find element
		while (currentNode) {
			if (value < currentNode.value) {
				// go left
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				// go right
				currentNode = currentNode.right;
			} else if (value === currentNode.value) {
				return currentNode;
			}
		}
		return false;
	}
	remove(value) {
		if (!this.root) {
			return false;
		}
		let currentNode = this.root;
		let parentNode = null;
		while (currentNode) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else if (currentNode.value === value) {
				//We have a match, get to work!

				//Option 1: No right child:
				if (currentNode.right === null) {
					if (parentNode === null) {
						this.root = currentNode.left;
					} else {
						//if parent > current value, make current left child a child of parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.left;

							//if parent < current value, make left child a right child of parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.left;
						}
					}

					//Option 2: Right child which doesnt have a left child
				} else if (currentNode.right.left === null) {
					currentNode.right.left = currentNode.left;
					if (parentNode === null) {
						this.root = currentNode.right;
					} else {
						//if parent > current, make right child of the left the parent
						if (currentNode.value < parentNode.value) {
							parentNode.left = currentNode.right;

							//if parent < current, make right child a right child of the parent
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = currentNode.right;
						}
					}

					//Option 3: Right child that has a left child
				} else {
					//find the Right child's left most child
					let leftmost = currentNode.right.left;
					let leftmostParent = currentNode.right;
					while (leftmost.left !== null) {
						leftmostParent = leftmost;
						leftmost = leftmost.left;
					}

					//Parent's left subtree is now leftmost's right subtree
					leftmostParent.left = leftmost.right;
					leftmost.left = currentNode.left;
					leftmost.right = currentNode.right;

					if (parentNode === null) {
						this.root = leftmost;
					} else {
						if (currentNode.value < parentNode.value) {
							parentNode.left = leftmost;
						} else if (currentNode.value > parentNode.value) {
							parentNode.right = leftmost;
						}
					}
				}
				return true;
			}
		}
	}
	breathFirstSearch() {
		let currentNode = this.root;
		// this list will be our answer
		let list = [];
		// to keep track of level we are at to access the children
		let queue = [];
		// current Node
		queue.push(currentNode);
		// go left to Right while there there are nodes in the queue
		while (queue.length > 0) {
			// return first item in queue and remove that item from the queue (9) then set to 4
			currentNode = queue.shift();
			// add that node to the answer in first case we want to put 9 in the list then 4 to answer
			list.push(currentNode.value);
			// does the node have a left child? then add to queue since left to right order (4), checks 4 node left child (1)
			if (currentNode.left) {
				queue.push(currentNode.left);
			}
			// if the node has a right child also want to add to queue (20), add 6 to the queue
			// will check 20 first (level first) since front of queue then go to 4 then 6 etc.
			if (currentNode.right) {
				queue.push(currentNode.right);
			}
		}
		return list;
	}
	breathFirstSearchR(queue, list) {
		if (!queue.length) {
			return list;
		}
		const currentNode = queue.shift();
		if (currentNode.left) {
			queue.push(currentNode.left);
		}
		if (currentNode.right) {
			queue.push(currentNode.right);
		}
		return breathFirstSearchR(queue, list);
	}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
JSON.stringify(traverse(tree.root));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
	const tree = { value: node.value };
	tree.left = node.left === null ? null : traverse(node.left);
	tree.right = node.right === null ? null : traverse(node.right);
	return tree;
}

breathFirstSearchR([this.root], []);
