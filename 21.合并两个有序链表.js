/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 新建一个虚拟节点
  let node = new ListNode();
  let p = node;
  let p1 = list1;
  let p2 = list2;

  // 比较p1和p2的大小，小的放在p.next
  while (p1 != null && p2 !== null) {
    if (p1.val >= p2.val) {
      p.next = p2;
      p2 = p2.next;
    } else {
      p.next = p1;
      p1 = p1.next;
    }
    // 每新增一个后，p往前进一步
    p = p.next;
  }

  // 当p1或p2中有null时，说明后面可以直接放在p后
  if (p1 !== null) {
    p.next = p1;
  }

  if (p2 !== null) {
    p.next = p2;
  }
  // 返回虚拟节点的头节点
  return node.next;
};
// @lc code=end
