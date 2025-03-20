// https://school.programmers.co.kr/learn/courses/30/lessons/42897

function solution(money) {
  const n = money.length;
  const dp1 = Array(n).fill(0);
  const dp2 = Array(n).fill(0);

  // 첫 번째 집을 도둑질하는 경우
  dp1[0] = money[0];
  dp1[1] = money[0];
  for (let i = 2; i < n - 1; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
  }

  // 첫 번째 집을 도둑질하지 않는 경우
  dp2[1] = money[1];
  for (let i = 2; i < n; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  // 두 경우 중 최댓값 찾기
  const answer = Math.max(dp1[n - 2], dp2[n - 1]);

  return answer;
}

console.log(solution([1, 2, 3, 1]));
