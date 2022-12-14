/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


// 0 -> 1 -> 2 -> 3 -> 4 -> 5
//      B                   F
var removeNthFromEnd = function(head, n) {
  const root = new ListNode(0);
  root.next = head;
  let front = root;
  let back = root;
  while (n >= 0) {
    front = front.next;
    n--;
  }
  while (front) {
    front = front.next;
    back = back.next;
  }
  back.next = back.next.next;
  return root.next;
};

// var removeNthFromEnd = function(head, n) {
    
//     // Basically, if head is the only node, then return null
//     if (!head.next) return null;
    
//     //Traverse through L.L. to determine length
//     let size = 0, curr = head;
//     while (curr) {
//         curr = curr.next;
//         size++;
//     }

//     // Find 0th-index of node to remove
//     // Break the link at the node 1 before index (index - 1)
//     let index = size - n, i = 0;
//     curr = head;
    
//     if (index === 0) return head.next;
    
//     while (i < index) {
//         if (i === index - 1){
//             if (!curr.next.next) {
//                 curr.next = null;  
//             } else {
//                 curr.next = curr.next.next;
//             }
//             break;
//         }
        
//         curr = curr.next;
//         i++;
//     }
    
//     return head;
// };