/**
 * https://leetcode.cn/problems/restore-ip-addresses/description/
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

提示：

1 <= s.length <= 20
s 仅由数字组成
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length < 4 || s.length > 12) {
    return [];
  }

  let res = [];
  let path = [];
  let num = 0; // 统计分割的次数

  function track(s, startIndex) {
    if (num === 3) {
      let item = s.slice(startIndex, s.length);
      if (isIpNumber(item)) {
        res.push([...path, item].join("."));
        return;
      }
    }

    for (let i = startIndex; i < s.length && num < 3; i++) {
      const item = s.slice(startIndex, i + 1);

      if (isIpNumber(item)) {
        path.push(item);
        num++;
      } else {
        continue;
      }

      track(s, i + 1);
      path.pop();
      num--;
    }
  }

  track(s, 0);
  return res;
};

function isIpNumber(item) {
  if (parseInt(item) <= 255) {
    if (item[0] === "0" && item.length > 1) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

console.log(restoreIpAddresses("101023"));
