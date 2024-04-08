/**
 * 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
 *
 *
 *
 * 示例 1:
 *
 * 输入: s = "abab"
 * 输出: true
 * 解释: 可由子串 "ab" 重复两次构成。
 * 示例 2:
 *
 * 输入: s = "aba"
 * 输出: false
 * 示例 3:
 *
 * 输入: s = "abcabcabcabc"
 * 输出: true
 * 解释: 可由子串 "abc" 重复四次构成。 (或子串 "abcabc" 重复两次构成。)
 *
 *
 * 提示：
 *
 * 1 <= s.length <= 104
 * s 由小写英文字母组成
 */

var repeatedSubstringPattern = function (s) {
  if (s.length === 1) {
    return false;
  }

  let flag = true;
  let startIndex = 1;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let res = [];

    let child = s.slice(0, i + 1);
    startIndex = i + 1;
    while (startIndex + i < s.length) {
      let compare = s.slice(startIndex, startIndex + i + 1);
      if (compare.indexOf(child) === -1) {
        flag = false;
        break;
      } else {
        res.push(true);
      }
      startIndex += i + 1;
    }
    if (
      !res.includes(false) &&
      res.length !== 0 &&
      res.length + 1 === s.length / (i + 1)
    ) {
      flag = true;
      break;
    }
  }

  return flag;
};

console.log(repeatedSubstringPattern("babbabbabbabbab"));
