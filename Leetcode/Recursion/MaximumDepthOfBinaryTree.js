/*
Binary Trees:

Search Types:
1. Breadth First Search
2. Depth First Search   

Traversal Type w/ Depth First Search 
1. pre-order traversal 
2. in-order traversal
3. post-order traversal

Question: Given a binary tree, find its maximum depth 

Maximum depth is the number of nodes along the longest path from the root node to the furthest leaf node. 


Verify the Constraints: What do we return if the tree is empty -> return 0 
if just 1 node return 1
if multiple branches tie for max depth just need to write max number 

worst case for binary tree is if unbalanced and become 1 path like -> LinkedList O(n) 
since not cutting down on search space 

ask questions

1. do I need to traverse through this tree? 95% of the time yes and this case yes
2. Depth vs Breadth for problem. In our case node is near end so depth 
3. let recursion guide our solution 
*/
// take in root node as param so need to recursively call child
// want to pass count to next recursive call (how many nodes came before any particular child)
/*
const recursiveTraverseDepth = (node,count) => {
  // base case -> done when no more nodes left (node is null) then 
  // return max of left recursion and right recursion pass that value to the previous recursive call on the stack
  // recursive call by passing children node 
  recursiveTraverseDepth(left)
  recursiveTraverseDepth(right)
}
*/

const maxDepth = (node, currentDepth) => { // S: O(heightOfTree) best case but worst case if unbalanced and path like linkedList S: O(n), T: O(n)
	if (node == null) {
		return currentDepth;
	}
	currentDepth++;
	return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth));
};
