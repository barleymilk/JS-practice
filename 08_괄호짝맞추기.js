// 소괄호는 짝을 맞춘 열린 괄호'('와 닫힌 괄호')'로 구성한다.
// 소괄호가 정상으로 열고 닫혔는지 판별하는 solution() 함수를 구현하라
// 소괄호가 정상적으로 열고 닫혔다면 true, 아니면 false를 반환한다.

function solution(parentheses) {
  let stack = 0;

  for (const s of parentheses) {
    if (s === "(") {
      stack++;
    } else {
      if (stack === 0) return false;
      stack--;
    }
  }
  return stack === 0;
}
