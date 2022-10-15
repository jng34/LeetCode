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

var mergeTwoLists = function(list1, list2) {
    
    if (!list1) return list2;
    if (!list2) return list1;
    
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
    
}




















// var mergeTwoLists = function(list1, list2) {
//     //edge cases if either list1 or list2 are null
//     if (!list1) return list2;
//     if (!list2) return list1;
     
//     if(list2.val >= list1.val) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
// }



// var mergeTwoLists = function(list1, list2) {
//     if (!list1) return list2
//     if (!list2) return list1
    
//     if(list1.val <= list2.val) {
//         list1.next = mergeTwoLists(list1.next, list2)
//         return list1
//     } else {
//         list2.next = mergeTwoLists(list1, list2.next);
//         return list2;
//     }
    
// };