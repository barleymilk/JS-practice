// https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  const digits = Array.from(String(n), Number);
  digits.sort((a, b) => b - a); // 내림차순
  const answer = Number(digits.join(""));
  return answer;
}

console.log(solution(118372));
