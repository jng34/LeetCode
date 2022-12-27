# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        values = []
        curr = head
        while curr:
            values.append(curr.val)
            curr = curr.next
        
        twinSum = 0
        i = 0
        j = len(values) - 1
        while i < j:
            twinSum = max(twinSum, values[i] + values[j])
            i += 1
            j -= 1
        return twinSum