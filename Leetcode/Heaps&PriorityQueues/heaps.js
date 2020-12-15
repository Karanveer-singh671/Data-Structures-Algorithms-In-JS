/*
Resembles a complete binary tree (every single level full except last level and if there are nodes in last level
then the nodes are pushed as left as possible)
Min-Heap: Every node's children are greater than the parent -> Root node is the smallest value
Max-Heap:Every node's children both left and right are smaller than parent -> Root node is greatest value in the Heap

A max heap represented in an array 

[50,40,25,20,35,10,15]      ->       Getting any node's Parent Formula: Floor((index - 1) / 2)
 0  1  2  3  4  5  6        ->       Getting the left child of a Node Formula: (Index * 2) + 1
                            ->       Getting the right child of a Node Formula: (Index * 2) + 2
 
*/