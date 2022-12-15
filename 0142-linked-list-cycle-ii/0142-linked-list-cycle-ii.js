/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
   1   ->   2 
 slow      
 fast
 if slow == fast
*/
var detectCycle = function(head) {
  let seen = new Set();
  let curr = head;
  while (curr) {
    if (seen.has(curr)) return curr;
    seen.add(curr);
    curr = curr.next;
  }
  return null;
};