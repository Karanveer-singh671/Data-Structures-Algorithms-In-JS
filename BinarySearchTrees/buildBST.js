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
			} else if(value > currentNode.value) {
				// go right
				currentNode = currentNode.right;
      }
      else if(value === currentNode.value) {
        return currentNode
      }
    }
    return false
	}
	remove(value) {}
}
