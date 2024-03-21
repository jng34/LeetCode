/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    // use var temp to track end of list2 to connect to list2
    let last = list2;
    while (last.next) {
        last = last.next;
    }
    
    // traverse through list1 while keeping count of nodes
    let newList = list1;
    let curr = list1;
    let n = 0;
    
    while (curr) {
        let temp = curr.next;
        if (n === a - 1) curr.next = list2;
        if (n === b) {
            last.next = curr.next;
            break;
        }
        n++;
        curr = temp;
    }
    
    return list1;
};







