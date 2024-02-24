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
var deleteDuplicates = function(head) {
  if (!head) return head;
  
  // track prev and curr nodes for reference to delete duplicates
  let prev = head;
  let curr = head.next;
  
  // traverse through linked list
  while (curr) {
    if (curr.val === prev.val) {
      curr = curr.next;
    } else {
      prev.next = curr;
      prev = curr;
      curr = curr.next;
    }
  }
  
  prev.next = null;

  return head;
};