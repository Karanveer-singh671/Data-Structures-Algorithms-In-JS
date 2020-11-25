/*
Given a doubly linked list, list nodes also have a child property that can point to a separate doubly linked list.
These child lists can also have one or more child doubly linkedLists of their own, and so on.
return the list as a single level flattened doubly linked list.

Verify the Constraints:
1. Can a doubly linked list have multiple child list nodes? Yes, every list node can have multiple levels of children!
2. What do we do with child properties after flattening? just set child property value to null.

Need to keep track of current and if it has a child go to child then check if child has a next then once next is null we have found
our tail to connect to the next nodes value and the next's nodes previous value to the tail
then connect the current nodes child and its next pointers till we hit the tail to the current nodes next and set child to null
set previous of child to be the current since flattened
*/


const flatten = (head) => {
  if(!head) {
    return head
  }
  let current = head
  // advance node to end of list 
  while(current !== null) {
    // no children of node just advance node
    if(current.child === null) {
      current = current.next
    } else {
      // need current, already have and child already have and next already have
      // need tail of child to connect to next of current 
      let tail = current.child
      // go traverse the child until node points to null (tail)
      while(tail.next !== null) {
        tail = tail.next
      }
      // tail is now set to proper tail whose next will be the current.next's previous 
      // merge tail first 
      tail.next = current.next;
      // if last node has a child there won't be a current.next for tail to point to 
      if(tail.next !== null) {
        // there is a node that tail.next points to so we can set tail.next node's previous to the tail 
        tail.next.prev = tail 
      }
      // tail.next === null in this case if it doesn't go in the above if so don't have a previous to set to the tail
      // set the current's next to be it's child 
      current.next = current.child
      // set the child's previous to point to the current node 
      current.next.prev = current
      // set the child of the current to be null since we merged
      current.child = null
    }
  }
  // head of entire linkedList 
  return head;
}