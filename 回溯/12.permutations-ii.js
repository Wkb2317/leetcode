/** 
 * https://leetcode.cn/problems/permutations-ii/description/
 * 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 

提示：

1 <= nums.length <= 8
-10 <= nums[i] <= 10
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];
  let path = [];

  nums.sort((a, b) => (a > b ? 1 : -1));

  function track(array, used) {
    if (path.length === array.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < array.length; i++) {
      if (used[i] === true) {
        continue;
      }
      if (array[i] === array[i - 1] && used[i - 1] === false) {
        continue;
      }

      const item = array[i];
      path.push(item);
      used[i] = true;
      track(array, used);
      path.pop();
      used[i] = false;
    }
  }

  track(nums, new Array(nums.length).fill(false));
  return res;
};

console.log(permuteUnique([1, 1, 2]));
