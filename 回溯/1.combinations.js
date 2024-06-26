/**
 * 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。
你可以按 任何顺序 返回答案。
示例 1：
输入：n = 4, k = 2
输出：
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
示例 2：
输入：n = 1, k = 1
输出：[[1]]
 
提示：
1 <= n <= 20
1 <= k <= n
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  function track(n, k, startIndex) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      track(n, k, i + 1);
      path.pop();
    }
  }

  let result = []; // 存储集合
  let path = []; // 存储每次的数字
  track(n, k, 1);
  return result;
};

console.log(combine(1, 1));
