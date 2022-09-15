// https://leetcode.com/problems/count-complete-tree-nodes/submissions/
// medium 09/15

// 왜 medium인지 잘 모르겠다/.
// tree traverse 만 알고있으면 풀수 있을 듯.
//Runtime: 94 ms, faster than 97.10% of JavaScript online submissions for Count Complete Tree Nodes.
// Memory Usage: 61.5 MB, less than 97.39% of JavaScript online submissions for Count Complete Tree Nodes.
var countNodes = function (root) {
  let count = 0;
  function doPreOrder(node) {
    if (!node) return;
    count++;
    doPreOrder(node.left);
    doPreOrder(node.right);
  }
  doPreOrder(root);
  return count;
};
