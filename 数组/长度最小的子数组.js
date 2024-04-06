/**
 * 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。
 *
 * 示例：
 *
 * 输入：s = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 * 提示：
 *
 * 1 <= target <= 10^9
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^5
 */


// 滑动窗口
// while循环
function  foo(s, nums){
    let start = 0
    let end = 0
    let min = 100001
    let sum = 0

    while(end < nums.length){
        sum += nums[end]

        while(sum >= s){
            min = Math.min(end - start + 1, min)
            sum -= nums[start++]
        }
        end++
    }

    return min === 100001 ? 0: min
}

console.log(foo(7,[2,3,1,2,4,3]))