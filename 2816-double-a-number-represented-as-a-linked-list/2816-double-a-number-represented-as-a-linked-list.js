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
var doubleIt = function(head) {
  /*
    Approach #2:
    -Iterate through linked list from end
    -Double the integer and track any carry over
    -Add any carry over to the next number, after doubling
  */

  // Reverse linked list
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;    
  }

  let carry = 0;

  while (prev) {
    // assign ones digit of doubled value
    const num = prev.val * 2;
    const ones = num % 10;
    if (carry === 1) {
      prev.val = ones + carry;
      carry = 0;
    } else {
      prev.val = ones;
    }
    if (num > 9) carry = 1;

    let temp = prev.next;
    prev.next = curr;
    curr = prev;
    prev = temp;
  }

  return carry === 1 ? new ListNode(carry, curr) : curr;
};