// https://school.programmers.co.kr/learn/courses/30/lessons/12945

// 모듈러 연산
// (a + b) % m = ((a % m) + (b % m)) % m

// 문제에 적용하기
// F(n) % m
// = (F(n - 1) + F(n - 2)) % m
// = (F(n - 1) % m + F(n - 2) % m) % m

function solution(n) {
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = (a + b) % 1234567; // 중간 계산에서도 나머지를 취해 오버플로우 방지
    a = b;
    b = temp;
  }
  return n === 0 ? a : b;
}

console.log(solution(3));
console.log(solution(5));
