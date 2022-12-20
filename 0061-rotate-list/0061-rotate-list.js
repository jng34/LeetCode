/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

//   1  ->   2  ->   3  ->   4  ->   5  ->  1  ->  2  ->  3  ->  4  ->  5
//  curr     

var rotateRight = function(head, k) {
  if (!head) return null;
  
  let lastNode = head;
  let length = 1;
  while (lastNode.next) {
    lastNode = lastNode.next;
    length++;
  }
  
  lastNode.next = head;
  k = k % length;

  let temp = head;
  for (let i = 1; i < length - k; i++) {
    temp = temp.next;
  }
  
  let rotatedNode = temp.next;
  temp.next = null;
  return rotatedNode;  
};
