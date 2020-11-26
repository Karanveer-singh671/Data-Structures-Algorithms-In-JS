/*
Cycle detection in a linked list
*/

const findCycle = head => { // T: O(n), S:O(n)
  let current = head 
  // initialize a set so can find duplicates 
  const seenNodes = new Set();
  // keep looping through L.L until we have a node we have seen before (cycle and that first node seen is where cycle starts)
  while(!seenNodes.has(current)) {
    // need to also check if next value exists because if next value is null then we have a tail and no cycle!
    if(current.next === null) {
      return false 
    }
    seenNodes.add(current);
    current = current.next
  }
  // now exited while loop so the node we have right now is the start of cycle 
  return current
}

/*
Floyd Tortoise and hair 
*/