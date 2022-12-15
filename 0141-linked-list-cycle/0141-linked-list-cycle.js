/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
  let seen = new Set();
  let curr = head;
  while (curr) {
    if (seen.has(curr)) return true;
    seen.add(curr);
    curr = curr.next;
  }
  return false;
};

//  3  -  2  -  0  -  (-4)  - 2  -  0  -  (-4)
//                    slow  
//                                        fast
 
// var hasCycle = function(head) {
//   if (!head || !head.next) return false;
  
//   let slow = head, fast = head;
  
//   while(fast) {
//     if (fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     } else {
//       return false;
//     }
    
//     if (slow === fast) return true;
//   }
  
//   return false;
// };