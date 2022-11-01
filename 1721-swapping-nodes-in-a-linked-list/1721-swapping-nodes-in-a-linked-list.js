/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    
    // Traverse through linked list to get array of values
    let curr = head;
    let listVals = [];
    while (curr) {
        listVals.push(curr.val);
        curr = curr.next;
    }
    
    // Locate and swap kth values from beginning and end
    let frontIndex = k - 1, backIndex = listVals.length - k;
    let frontVal = listVals[frontIndex], backVal = listVals[backIndex];
    listVals[frontIndex] = backVal;
    listVals[backIndex] = frontVal;
    
    
    // Build link list connections and return head
    // Helper function to create Node
    function createNode(node, value) {
        let tempNode = new ListNode();
        tempNode.val = value;
        tempNode.next = node;
        node = tempNode;
        return node;
    }
    
    let newHead;
    
    // Iterate from end to beginning of array
    function arrayToList(arr) {
        newHead = null;
        for (let i = arr.length - 1; i >= 0; i--) {
            newHead = createNode(newHead, arr[i]);
        }
        return newHead;
    }
    
    return arrayToList(listVals)
    
};

















