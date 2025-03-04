// 주어진 두 개의 문자열 str1, str2에 대해 최장 공통 부분 수열의 길이를 계산하는 solution() 함수를 구현하라.

function solution(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(solution("ABCBDAB", "BDCAB"));
console.log(solution("AGGTAB", "GXTXAYB"));
