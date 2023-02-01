# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
      # Split list into two halfs by finding middle
      slow, fast = head, head.next
      while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
      
      # Second half starts at the middle node's next
      second_half = slow.next
      # The next of last node in first half should be None
      slow.next = None
      
      # Reverse second half
      prev = None
      while second_half:
        temp = second_half.next
        second_half.next = prev
        prev = second_half
        second_half = temp
      
      # Second half's new head is at prev b/c second half is None 
      second_half = prev
      first_half = head
      
      while second_half:
        temp1, temp2 = first_half.next, second_half.next
        first_half.next = second_half
        second_half.next = temp1
        first_half, second_half = temp1, temp2
        