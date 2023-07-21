/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //  null    7 -> 2 -> 4 -> 3
    //  prev
    //         curr
    //             temp
    
    //Reverse both linked lists
    let prev1 = null;
    let curr1 = l1;
    while (curr1) {
        const temp = curr1.next;
        curr1.next = prev1;
        prev1 = curr1;
        curr1 = temp;
    }
    let prev2 = null;
    let curr2 = l2;
    while (curr2) {
        const temp = curr2.next;
        curr2.next = prev2;
        prev2 = curr2;
        curr2 = temp;
    }
    
    //Sum up nodes from linked list
    let res = null;
    let carry = 0;
    while (prev1 || prev2) {
        let newNode = new ListNode();
        let sum = 0;
      
        if (!prev2) {
            sum = prev1.val;
        } else if (!prev1) {
            sum = prev2.val;
        } else {
            sum = prev1.val + prev2.val;
        }
   
        if (prev1.next) {
            prev1 = prev1.next;
        } else {
            prev1 = 0;
        }
        if (prev2.next) {
            prev2 = prev2.next;
        } else {
            prev2 = 0;
        }
        
        if (carry === 1) {
            sum += carry;
            carry = 0;
        }
        if (sum > 9) {
            carry = 1;
            newNode.val = sum % 10;
        } else {
            newNode.val = sum;
        }
        
        newNode.next = res;
        res = newNode;
    }
    
    if (carry === 1) {
        let newNode = new ListNode(1);
        newNode.next = res;
        res = newNode;
    }

    return res;
};