/*
Question: Given a binary tree, return the level order traversal of the nodes' values as an array. 

Verify Constraints: what od we return if the tree is empty? return empty array

single root node then return [[node]]
no node -> []
consider what happens when binary tree is path-Like -> linkedList -> O(n) traversal since not cutting search space

questions I ask for binary tree
1. is there traversal and if so in what manner?
2. bfs or dfs
*/

const levelOrder = (root) => { 
  // T: O(n) since only touching nodes once for traversal, (count is for each level)
  // S: O(n), queue size is N/2 because it just stores largest level which is the leafs if tree is complete and full
	if (!root) {
		return [];
	}
	if (!root.left && !root.right) {
		return [[root]];
	}
	// initialize result array
	let res = [];
	// initialize queue with the root
	let queue = [root];
	while (queue.length) {
		// get length of queue
		let length = queue.length;
		// count of level
		let countOfLevel = 0;
		// elements in that level
		const levelArray = [];
    // need to initialize another while loop where count < length because then all the values above will be reset
    // key here is to add this while loop and logic inside 
		while (countOfLevel < length) {
			node = queue.shift();
			levelArray.push(node.val);
			// res.push(node.val)
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
			countOfLevel++;
    }
    // here the count of the level === length meaning we are done that level 
		res.push(levelArray);
	}
	// once queue is empty, return result array
	return res;
};
