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
var deleteDuplicates = function (head) {
  // Brute force
  if (!head) return head;

  // Order matters so we use Map obj
  const freq = new Map();
  let curr = head;

  // Traverse through linked list and track uniqueness with a hashMap
  while (curr) {
    const n = curr.val;
    if (freq.has(n)) {
      freq.set(n, freq.get(n) + 1);
    } else {
      freq.set(n, 1);
    }
    curr = curr.next;
  }

  let newHead = new ListNode();
  let prev = newHead;

  // Iterate through hash Map and create new linked list without duplicates
  freq.forEach((val, key) => {
      if (val === 1) {
        const node = new ListNode(key);
        prev.next = node;
        prev = node;
      }
  })

  return newHead.next;
};