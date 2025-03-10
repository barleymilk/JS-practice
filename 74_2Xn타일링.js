// https://school.programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  const dp = Array(n + 1).fill(0);
  dp[1] = 1; // 가로 길이가 1일 때 바닥을 채우는 방법의 수 1
  dp[2] = 2; // 가로 길이가 2일 때 바닥을 채우는 방법의 수 2
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1_000_000_007;
  }

  return dp[n];
}

console.log(solution(4));
