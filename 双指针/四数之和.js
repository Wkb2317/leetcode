/**
 * 题意：给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例： 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。 满足要求的四元组集合为： [ [-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2] ]
 */

var fourSum = function (nums, target) {
  nums.sort((a, b) => (a > b ? 1 : -1));

  if ((nums[0] > target && target > 0) || nums.length < 4) {
    return [];
  }

  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length; j++) {
      // 去重
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
          right--;
        } else if (nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++;
        } else {
          res.push([nums[i], nums[j], nums[left], nums[right]]);

          // 去重
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }

          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        }
      }
    }
  }

  return res;
};

fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11);
