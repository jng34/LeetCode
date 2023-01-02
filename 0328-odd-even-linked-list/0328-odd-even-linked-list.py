# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
          return None
        if not head.next:
          return head
        
        odd = head
        even_head = even_tail = head.next
        
        # Link all odd & even nodes together
        
        while even_tail and even_tail.next:
          next_odd = even_tail.next
          next_even = next_odd.next
          
          odd.next = next_odd
          even_tail.next = next_even
          
          odd = next_odd
          even_tail = next_even
        
        # Finally, link tail of odd to head of even nodes (even_head)
        odd.next = even_head
        
        return head