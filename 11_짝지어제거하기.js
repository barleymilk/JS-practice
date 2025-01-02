// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  const stack = [];

  for (let char of s) {
    // 스택의 마지막 문자와 현재 문자가 같다면 제거
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      // 아니라면 스택에 문자 추가
      stack.push(char);
    }
  }

  // 스택이 비어있으면 성공적으로 제거된 것
  return stack.length === 0 ? 1 : 0;
}

console.log(solution("baabaa"));
console.log(solution("cdcd"));
