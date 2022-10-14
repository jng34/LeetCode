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

// null  <-    1   //break   2  ->    3  ->   4   ->   5  --> null
//                                                   prev      curr      next
// curr.next = prev

var reverseList = function(head) {
    
    let curr = head;
    let prev = null;
    
    while(curr !== null) {
        
        let next = curr.next;  //3
        curr.next = prev; // null
        prev = curr; // 1
        curr = next;
    }
    
    return prev;
}




// var reverseList = function(head) {
//     let current = head;
//     let prev = null;
//     while(current !== null) {
//         let next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//         //order matters
//     }
//     return prev;
// };

