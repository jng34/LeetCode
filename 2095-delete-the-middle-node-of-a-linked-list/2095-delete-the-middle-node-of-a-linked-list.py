# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
      # Use slow and fast pointers
      # Find middle node, and keep track of prev of slow node
      # O(n/2) time bc we are only going through half the nodes w fast pointer
      
      if head.next is None:
        return head.next
      
      prev = ListNode()
      slow = fast = head
      
      while fast and fast.next:
        prev = slow
        slow = slow.next
        fast = fast.next.next
      
      # Delete middle node by setting prev.next to slow.next
      prev.next = slow.next
      
      return head