// https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/

// 09/11 품. easy

//preorder , postorder, inorder까지

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  const list = []
  const traversePreorder = (parent) => {
      if(!parent) return
      list.push(parent.val)
      traversePreorder(parent.left)
      traversePreorder(parent.right)
  }
  traversePreorder(root)
  return list
};

var postorderTraversal = function(root) {
  const list = []
const traversePreorder = (parent) => {
    if(!parent) return
    
    traversePreorder(parent.left)
    traversePreorder(parent.right)
    list.push(parent.val)
}
traversePreorder(root)
return list
};


var inorderTraversal = function(root) {
  const list = []
const traverseInorder = (parent) => {
if(!parent) return

traverseInorder(parent.left)
list.push(parent.val)
traverseInorder(parent.right)

}
traverseInorder(root)
return list
};