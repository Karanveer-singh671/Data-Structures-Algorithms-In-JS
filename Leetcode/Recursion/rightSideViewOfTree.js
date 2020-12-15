/*
Given a binary tree, imagine you are standing to the right of the tree. Return an array of the values of the nodes 
you can see ordered from top to bottom.

Constraints: if empty what do we return? empty array

does traversal matter? Yes 
bfs or dfs? Both valid 
*/

const rightSideViewBfs = (root) => {
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

		// while count < length 
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

/*
1. prioritize right side
2. keep track of level of nodes 
if DFS look into if changing the order of pre, in and post gets you to a solution!
3. preOrder: N, L, R is order -> change to N, R, L  [1,3,6,2,5,4,7,8] N,R,L
4. Inorder: L, N, R -> change to R, N, L [6,3,1,5,2,7,8,4]
5. PostOrder: L,R,N -> change to R,L,N [6,3,5,8,7,4,2,1]
*/

const rightSideView = (root) => {
	const result = [];
	dfsRightLeftNodeOrderPreOrderModification(root, 0, result);
	return result;
};

const dfsRightLeftNodeOrderPreOrderModification = ( 
	node,
	currentLevel,
	result
) => {
  // T: O(n) in the case unbalanced Binary Tree (LinkedList) path like then not cutting search space so O(n)
  // S: O(n)  in the same case if pathLike linked List then not popping recursive call off stack until have all nodes on it
  if (!node) return;
  // check if currentLevel is greater than the result.length (deeper level) -> so have a view of it so push node
	if (currentLevel >= result.length) result.push(node);
	if (node.right)
		dfsRightLeftNodeOrderPreOrderModification(
			node.right,
			currentLevel + 1,
			result
		);
	if (node.left)
		dfsRightLeftNodeOrderPreOrderModification(
			node.left,
			currentLevel + 1,
			result
		);
};


/*
BFS is O(n) time and O(n) space since last level is n/2 so O(n)
DFS is also O(n) since traversing full tree and O(n) space assuming linkedList path tree.
if WE KNOW that the tree we receive is going to be skewed like a path (linkedList) 
BFS is better since recursing level by level (less stored on the stack) (only storing 1 elem per level)
and once child put in queue we shift the parent out and into the result
if WE KNOW that the tree is going to be a complete balanced tree then DFS is better 
because then again less nodes on the stack O(heightOfTree) 
instead of O(n / 2) last level of tree storage for BFS O(widthOfLargestLevel)

This is for space optimization!!
*/