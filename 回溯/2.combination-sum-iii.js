/**
 * https://leetcode.cn/problems/combination-sum-iii/description/
 * 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。
说明：

所有数字都是正整数。
解集不能包含重复的组合。
示例 1: 输入: k = 3, n = 7 输出: [[1,2,4]]

示例 2: 输入: k = 3, n = 9 输出: [[1,2,6], [1,3,5], [2,3,4]]
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let path = [];
  let startIndex = 1;
  let sum = 0;

  track(k, n, startIndex);

  function track(k, n, startIndex) {
    if (sum === n && path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = startIndex; i <= 9 && path.length < k; i++) {
      path.push(i);
      sum += i;
      track(k, n, i + 1);
      sum -= i;
      path.pop();
    }
  }

  return result;
};

console.log(combinationSum3(2, 18));
