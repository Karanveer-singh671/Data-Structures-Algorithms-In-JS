/*
Full tree: every tree node has 0 or 2 children 
Complete Tree: every level is completely full except the last level and all nodes should be pushed to left as possible

Full and Complete tree: 0 or 2 children and every level completely filled including last level


Question: Number of Nodes in Complete tree?

Verify constraints: return zero if empty tree since returning a count 

we could use DFS or BFS and just count the number of nodes in the tree that way 
O(n) and O(n) for space and time 
but there must be a more optimal way 
focus on part that says complete binary tree -> this is the challenge 

bring the time or space from O(n) -> O(log(n)) or O(1)

if full and complete we can get number = 2^n - 1 where is N is the height (-1 since first level is just root)
number of nodes at the leaf is N / 2
binary search? 

count number of nodes above the last level (2^(height - 1)) - 1 = number of nodes excluding leaf -> O(1)
to get height of tree DFS left side (O(h)) -> O(log(n))
then add count of last level of the tree

binary search performs O(log(n)) search instead of O(n) dfs search 


for last level to exist it must have at least 1 node on the left side.
the max is 2^(height - 1) for the last level 

*/

const countNodes = (root) => {
	if (!root) return 0;

	const height = getTreeHeight(root);  // T: O(height) -> O(log(n))

	// want to make sure height is greater than base level
	if (height === 0) return 1;
	// number of nodes excluding last level
	const upperCount = Math.pow(2, height) - 1;
	// find rightmost element in last level
	let left = 0,
		right = upperCount;
	// check that left doesn't cross right
	while (left < right) { // O(log(n)) or O(height)
		// index to find to see if the node exists

		let indexToFind = Math.ceil((left + right) / 2);
		if (nodeExists(indexToFind, height, root)) { // O(height ^ 2) node exists binary search in binary search total 
			// node exists, shift left to index to find since we know that if node exists on the index all indexes before must have a node in a complete tree
			left = indexToFind;
		} else {
			// we know that the node doesn't exists at that index so we should move our right to our indexToFind - 1
			// since that is the closest place to the left of the node that didn't exists
			right = indexToFind - 1;
		}
	}
	// now we have found our index since left === right
	// can return either left or right since both are the index
	// total count is upperCount + leftIndex value or rightIndex value
	// + 1 since we are counting the number of nodes (index + 1)
	return upperCount + right + 1;
};

const getTreeHeight = (root) => {
	let height = 0;
	// keep recursively going left because complete binary tree level will always have nodes pushed at the left if level exists
	while (root.left !== null) {
		height++;
		// set the root to be the left child
		root = root.left;
	}
	return height;
};

const nodeExists = (indexToFind, height, node) => {
  let left = 0
  let right = Math.pow(2, height) - 1
  // keep track of how many steps made 
  let count = 0

  while(count < height) {
    let middleOfNode = Math.ceil((left + right) / 2);
    if(indexToFind >= middleOfNode) {
      // means the index we are finding is to the right of the middle node 
      node = node.right
      // shift left over to be the middleOfNode since we want to reduce search space 
      left = middleOfNode;
    } else {
      // indexTo find less than middle of Node so node is node.left and set right to be middle - 1
      node = node.left;
      right = middleOfNode - 1;
    }
    // increment the count 
    count++
  }
  // check node exists 
  return node !== null
}

// T: O(height ^ 2)  S: O(1)

