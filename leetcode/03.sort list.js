// https://leetcode.com/problems/sort-list/

// medium, 08/30


/**
* @param {ListNode} head
* @return {ListNode}
*/
var sortList = function(head) {
   const traverse = (head) => {
       if(!head) {
           return []
       }
       const result = [head.val]
       let temp = head.next
       while(temp){
           result.push(temp.val)
           temp = temp.next
       }
       return result
       
   }
   const traversed = traverse(head)
   const sorted = traversed.sort((a,b) => a - b)
   let node = new ListNode()
   // 여기서 node는 null이기 때문에, head.next로 리턴해야한다.
   let temp = node 

   for(const item of sorted){
       temp.next = new ListNode(item)
       temp = temp.next
   }
   return node.next
};