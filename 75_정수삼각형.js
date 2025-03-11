// https://school.programmers.co.kr/learn/courses/30/lessons/43105

/*
function solution(triangle) {
  const n = triangle.length;
  const dp = Array.from(Array(n), () => Array(n).fill(0));
  // dp 맨 아래 행 초기화
  for (let i = 0; i < n; i++) {
    dp[n - 1][i] = triangle[n - 1][i];
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0]; // 꼭대기 최댓값 반환
}
*/

function solution(triangle) {
  const n = triangle.length;

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0]; // 최댓값 반환
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));
