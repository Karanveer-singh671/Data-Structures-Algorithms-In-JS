/*
Question: Given a binary tree, determine if it is a valid binary search tree.
every node to the left side of the node is less than the node value 
every node to the right of the node is greater than the node value 
and every node to the right side must be greater than node, every node to left side must be less than the node 

Verify Constraints: Can there be duplicate values in the tree? 
Yes, if you receive duplicate values the tree is not a valid Binary Search Tree

Does the way we navigate through this tree matter? 

BFS or DFS
since this question is relating to parent values and comparing we would need DFS 
level order by BFS does not help us (no established relationship by level)

Answer: DFS
InOrder not meaningful or PostOrder traversal since we don't take the nodes previously achieved since go as far down before taking node value
-> PreOrder 

if continue traversing left without change in direction lower bound should be -infinity and upper bound should be parent
if continue traversing right without change in direction lower bound should be parent and upper bound +infinity
if switch directions L->R of branch lower bound is parent value after checking that parent is greater than -infinity and upper bound is root of if on right side +infinity
*/

const validateBinarySearchTree = (root) => { //T: O(n) since traversing each node to see if its valid, S: O(n) in the case the recursion stack contains all the values (linkedList BST look alike)
	if (!root) return true;

	return dfs(root, -Infinity, Infinity);
};

const dfs = (node, min, max) => {
	// must be greater than min and less than max if not return false
	if (node.val <= min || node.val >= max) {
		return false;
  }
  // traverse through all left values 
  // cannot return true after traversing left since still need to traverse right
  if(node.left) {
    // if we fail in the traversal return false
    if(!dfs(node.left,min, node.val)) {
      return false
    }
  }
  if(node.right) {
        // if we fail in the traversal return false
    if(!dfs(node.right, node.val, max)) {
      return false
    }
  }
  // if nothing has come back false then this node and all its children are valid
  return true
};
