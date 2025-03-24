// https://school.programmers.co.kr/learn/courses/30/lessons/12983

function solution(strs, t) {
  const n = t.length;
  const dp = Array(n + 1).fill(Infinity);
  dp[0] = 0;
  const sizes = new Set(strs.map((str) => str.length));

  // dp[1]부터 dp[n]까지
  for (let i = 1; i <= n; i++) {
    // strs에 존재하는 각 문자열 길이에 대해
    for (const size of sizes) {
      // 이미 구한 해에 strs 조각을 추가해서 문자열을 만들 수 있다면
      if (i - size >= 0 && strs.includes(t.slice(i - size, i))) {
        dp[i] = Math.min(dp[i], dp[i - size] + 1); // 최소 조각수 갱신
      }
    }
  }

  return dp[n] === Infinity ? -1 : dp[n];
}

console.log(solution(["ba", "na", "n", "a"], "banana")); // 3
console.log(solution(["app", "ap", "p", "l", "e", "ple", "pp"], "apple")); // 2
console.log(solution(["ba", "an", "nan", "ban", "n"], "banana")); // -1
