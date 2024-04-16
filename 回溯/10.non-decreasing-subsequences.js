/**
 * https://leetcode.cn/problems/non-decreasing-subsequences/description/
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。

示例 1：
输入：nums = [4,6,7,7]
输出：[[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]

示例 2：
输入：nums = [4,4,3,2,1]
输出：[[4,4]]
 
提示：
1 <= nums.length <= 15
-100 <= nums[i] <= 100
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let path = [];
  let res = [];

  if (nums.length === 1) {
    return [];
  }

  function track(array, startIndex) {
    if (path.length >= 2) {
      res.push([...path]);
    }

    let used = [];

    for (let i = startIndex; i < array.length; i++) {
      if (
        (array[i] < path[path.length - 1] && path.length > 0) ||
        used[array[i] + 100] === true
      ) {
        continue;
      }

      path.push(array[i]);
      used[array[i] + 100] = true;

      track(array, i + 1);
      path.pop();
    }
  }

  track(nums, 0);

  return res;
};

findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]).forEach(
  (item) => {
    console.log(item);
  }
);
