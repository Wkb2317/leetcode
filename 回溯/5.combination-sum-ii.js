/**
 * 给定一个候选人编号的集合 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
candidates 中的每个数字在每个组合中只能使用 一次 。

注意：解集不能包含重复的组合。 

示例 1:
输入: candidates = [10,1,2,7,6,1,5], target = 8,
输出:
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]

示例 2:
输入: candidates = [2,5,2,1,2], target = 5,
输出:
[
[1,2,2],
[5]
]
 
提示:
1 <= candidates.length <= 100
1 <= candidates[i] <= 50
1 <= target <= 30
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => (a > b ? 1 : -1));

  if (candidates[0] > target) {
    return [];
  }

  let result = [];
  let path = [];
  let sum = 0;

  function track(candidates, startIndex) {
    // if (sum > target) {
    //   return;
    // }
    if (sum === target) {
      result.push([...path]);
      return;
    }

    for (
      let i = startIndex;
      i < candidates.length && sum + candidates[i] <= target;
      i++
    ) {
      // 去重
      if (i > startIndex && candidates[i] === candidates[i - 1]) {
        continue;
      }

      sum += candidates[i];
      path.push(candidates[i]);
      track(candidates, i + 1);
      sum -= candidates[i];
      path.pop();
    }
  }

  track(candidates, 0);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
