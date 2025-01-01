// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function isRightParentheses(brackets) {
  const stack = [];
  const bracketPair = { ")": "(", "]": "[", "}": "{" };

  for (const b of brackets) {
    if (["(", "{", "["].includes(b)) {
      stack.push(b);
    } else {
      if (stack.length === 0 || stack.pop() !== bracketPair[b]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

function solution(s) {
  let count = 0;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isRightParentheses(rotated)) {
      count++;
    }
  }
  
  return count;
}

console.log(solution("[](){}")); // 3

console.log(solution("[](){}"));
