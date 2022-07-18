/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  // 创建node1 接收小于x的节点
  let node1 = new ListNode();
  let p1 = node1;
  // 创建node2，接收大于x的节点
  let node2 = new ListNode();
  let p2 = node2;

  // 遍历传入的链表
  while (head != null) {
    if (head.val < x) {
      p1.next = head;
      p1 = p1.next;
    } else {
      p2.next = head;
      p2 = p2.next;
    }
    // 断开原来的连接
    // 不断开会形成环
    let tmp = head.next;
    head.next = null;
    head = tmp;
  }

  p1.next = node2.next;
  return node1.next;
};
// @lc code=end
