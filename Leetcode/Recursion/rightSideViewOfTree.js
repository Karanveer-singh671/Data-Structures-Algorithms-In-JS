/*
Given a binary tree, imagine you are standing to the right of the tree. Return an array of the values of the nodes 
you can see ordered from top to bottom.

Constraints: if empty what do we return? empty array

does traversal matter? Yes 
bfs or dfs? Both valid 
*/

const rightSideView = (root) => {
	if (!root) {
		return [];
	}
	if (!root.left && !root.right) {
		return [1];
	}
	// want last value in the level or queue
	let result = [];
	let queue = [root];
	while (queue.length) {
		let count = 0;
		let length = queue.length;
		let node;

		// push into result only last value of the level

		// while ?
		while (count < length) {
			node = queue.shift();
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
			count++;
			// we have went thru that level
		}
		// count === length we have reached the end of the level
		result.push(node.val);
	}
	return result;
};
