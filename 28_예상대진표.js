// https://school.programmers.co.kr/learn/courses/30/lessons/12985
// N: 게임참가자 수
// A: 참가자 번호
// B: 경쟁자 번호

function solution(N, A, B) {
  let answer = 0;
  while (A != B) {
    A = Math.ceil(A / 2);
    B = Math.ceil(B / 2);
    answer++;
  }
  return answer;
}

console.log(solution(8, 4, 7));
