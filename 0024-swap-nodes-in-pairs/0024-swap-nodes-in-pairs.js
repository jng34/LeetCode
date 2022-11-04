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

/*
       0  ->   1  ->  2  ->  3  ->  4
      prev    curr
       
       0   ->    2     ->  1  ->  3  ->  4
      prev   curr.next    curr
*/
var swapPairs = function(head) {
    //if head is null, return null
    //if head.next is null, return head
    if (!head || !head.next) return head;
    
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let prevNode = dummyHead;
    let currHead = head;
    
    while (currHead && currHead.next) {
        let nextNode = currHead.next;

        prevNode.next = nextNode; //0 -> 2
        currHead.next = nextNode.next;  // 1 -> 3
        nextNode.next = currHead; // 2 -> 1
        
        //   0   ->    2     ->     1    ->      3
        // prev       next        curr        next.next     
        prevNode = currHead;
        currHead = currHead.next;   
    }
    
    return dummyHead.next;


};