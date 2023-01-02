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
  Traverse through linked list and have a variable to track even nodes (e.g. counter)
  
     1    ->    2    ->    3    ->    4    ->   5  ->   6
    odd        evenTail      nextOdd   nextEven
     1    ->    3    ->    2    ->    4    ->    5  ->   6
               odd                  evenTail
*/
var oddEvenList = function(head) {
  if (!head) return null;
  if (!head.next) return head;
  
  let odd = head, evenHead = head.next, evenTail = head.next, nextOdd, nextEven;
  
  while (evenTail && evenTail.next) {
    nextOdd = evenTail.next;
    nextEven = nextOdd.next;
    
    odd.next = nextOdd;
    evenTail.next = nextEven;
    odd = nextOdd;
    evenTail = nextEven;
  }
  
  odd.next = evenHead;
  return head;
  
};