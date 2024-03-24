/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
  // iterate through linked list with prefix sum
  let front = new ListNode(0, head);
  let start = front;
  
  while (start) {
    let sum = 0;
    let end = start.next;
    
    while (end) {
      sum += end.val;
      if (sum === 0) {
        start.next = end.next;
      }
      end = end.next;
    }
    
    start = start.next;
  }
  
  return front.next;
};