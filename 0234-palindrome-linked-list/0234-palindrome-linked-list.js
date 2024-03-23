/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // convert linked list to an array of nums
  let nums = [];
  let curr = head;
  while (curr) {
    nums.push(curr.val);
    curr = curr.next;
  }
  
  // run algo to check for palindrome - two pointers
  let l = 0, r = nums.length - 1;
  while (l < r) {
    if (nums[l] !== nums[r]) return false;
    l++;
    r--;
  }
  
  return true;
};