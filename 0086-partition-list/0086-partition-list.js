/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  /*
        [ 1, 4, 3, 2, 5, 2 ]    x = 3
                         c
     part1 = [1, 2, 2]
                    p1  
            p1St
     part2 = [4, 3, 5]
                    p2
            p2St
  */ 
  let currNode = head;
  let p1= null, p2 = null, p1Start = null, p2Start = null;
  
  while (currNode) {
    
    if (currNode.val < x) {
      // partition before
      if (!p1) {
        p1= currNode;
        p1Start = p1;
      } else {
        p1.next = currNode;
        p1 = currNode;
      }
      
    } else {
      // partition after
      if (!p2) { 
        p2 = currNode;
        p2Start = p2;
      } else {
        p2.next = currNode;
        p2 = currNode;
      }
      
    }
    currNode = currNode.next;
  }
  
  if (p2) p2.next = null;
  if (p1 && p2Start) p1.next = p2Start;
  
  return p1Start || p2Start;
};