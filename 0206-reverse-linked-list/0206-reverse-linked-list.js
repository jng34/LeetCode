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

// null <-  1    <-   2   <-   3  <-  4  <-  5  
// 
//                                         prevN
//                                                currN
//                                                nextN
//   5 -> 4 -> 3 -> 2 -> 1 -> null
var reverseList = function(head) {
    let currNode = head;
    let prevNode = null; 
    while (currNode !== null) {
        let nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    return prevNode
};