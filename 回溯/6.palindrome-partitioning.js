/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串。返回 s 所有可能的分割方案。
示例 1：

输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
示例 2：

输入：s = "a"
输出：[["a"]]
 
提示：
1 <= s.length <= 16
s 仅由小写英文字母组成
 */

// 判断是否是回文
function isPatternString(str) {
  let end = str.length - 1;
  for (let i = 0; i < str.length - 1 && i <= end; i++, end--) {
    if (str[i] !== str[end]) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];
  let path = [];

  function track(str, splitIndex) {
    if (path.join("") === str) {
      res.push([...path]);
      return;
    }

    for (let i = splitIndex; i < str.length; i++) {
      let item = str.slice(splitIndex, i + 1);
      if (isPatternString(item)) {
        path.push(item);
      } else {
        continue;
      }
      track(str, i + 1);
      path.pop();
    }
  }

  track(s, 0);

  return res;
};

console.log(partition("aab"));
