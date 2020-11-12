//If you know a solution is not far from the root of the tree:
//* BFS (since goes level by level instead of depth first)
//If the tree is very deep and solutions are rare: 
//* BFS (since will be going down a branch depth first it will take long since won't find a solution and go depth first for each branch)
//* More memory space O(n) compared to O(height of tree)
//If the tree is very wide:
//* DFS (BFS would take up a lot of memory O(n) compared to O(height of tree)) (BFS done using a queue)
//* if you know solution is at the upper level of the tree then BFS would be better since level by level search
//If solutions are frequent but located deep in the tree:
//* DFS ( less memory space O(height of tree) compared to O(nodes)), solution frequent so won't have to go thru too many branches)
//Determining whether a path exists between two nodes:
//* DFS (good for path exists since will go to end of branch from a root to target node)
//Finding the shortest path:
//* BFS (good since shortest path will have nodes closer to it and won't have to traverse depth of tree)