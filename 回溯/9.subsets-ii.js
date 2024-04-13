/**
 * https://leetcode.cn/problems/subsets-ii/description/
 * 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

示例 1：
输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]

示例 2：
输入：nums = [0]
输出：[[],[0]]
 
提示：
1 <= nums.length <= 10
-10 <= nums[i] <= 10
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums, startIndex) {
  nums.sort((a, b) => (a > b ? 1 : -1));
  let res = [];
  let path = [];

  function track(array, startIndex) {
    res.push([...path]);
    if (array.length === startIndex) {
      return;
    }

    for (let i = startIndex; i < array.length; i++) {
      if (startIndex < i) {
        if (array[i] === array[i - 1]) {
          continue;
        }
      }

      path.push(array[i]);
      track(nums, i + 1);
      path.pop();
    }
  }

  track(nums, 0);
  return res;
};

console.log(subsetsWithDup([1, 2, 2]));
