/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function(head) {
    // Initialized result
    let sum = 0;

    // Traverse linked list
    while (head != null) {
        // Multiply result by 2 and add
        sum = (sum * 2) + head.val

        // Move next
        head = head.next;
    }
    return sum;
}
    


// var getDecimalValue = function(head) {
//     // Initialized result
//     let sum = 0;
//     let length = 0;
//     // Set a pointer
//     let curr = head;
//     // Traverse linked list for length
//     while (curr != null) {
//         length++;
//         curr = curr.next;
//     }

//     // Traverse linked list for sum
//     while (head != null) {
//         sum = sum + (head.val * 2**(length - 1));
//         length--;
//         head = head.next;
//     }
//     return sum;
// }