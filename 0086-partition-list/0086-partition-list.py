# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
      curr = head
      p1 = p2 = p1Start = p2Start = None
      
      while curr:
        if curr.val < x:
          if p1:
            p1.next = curr
            p1 = curr
          else:
            p1 = curr
            p1Start = p1
        
        else:
          if p2:
            p2.next = curr
            p2 = curr
          else:
            p2 = curr
            p2Start = p2
            
        curr = curr.next
      
      if p2:
        p2.next = None;
      if p1 and p2Start:
        p1.next = p2Start
      
      return p1Start or p2Start