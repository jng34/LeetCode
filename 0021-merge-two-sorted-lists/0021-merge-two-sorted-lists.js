/*
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
*/
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


// Recursive solution
var mergeTwoLists = function (list1, list2) {
    
    // Base cases
    if (!list1) return list2;
    if (!list2) return list1;
    
    // If list1's value is less than or equal to list2's value
    // make recursive call to function on list1.next
    // which will compare list1.next and current list2 values
    // This will happen recursively until the base cases ^ are met
    // Result:   1 -> 1 -> 2 -> 3 -> 4 -> 5
    
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
    
}































// Iterative solution
// var mergeTwoLists = function(list1, list2) {
    
//     let head = new ListNode(0);
//     let tail = head;
    
//     while(tail) {
        
//         if (!list1) {
//             tail.next = list2;
//             break;
//         }
//         if (!list2) {
//             tail.next = list1;
//             break;
//         }
        
//         if (list1.val <= list2.val) {
//             tail.next = list1;
//             list1 = list1.next;
//         } else {
//             tail.next = list2;
//             list2 = list2.next;
//         }
        
//         tail = tail.next;
//     }
    
//     return head.next;    
    
// }


//Recursive solution
// var mergeTwoLists = function(list1, list2) {
    
//     if (!list1) return list2;
//     if (!list2) return list1;
    
//     if (list1.val <= list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// }













