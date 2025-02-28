// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const total = brown + yellow;
  for (let col = 3; col <= Math.sqrt(total); col++) {
    if (total % col === 0) {
      let row = total / col;
      if ((row - 2) * (col - 2) === yellow) {
        return [row, col];
      }
    }
  }
}

console.log(solution(10, 2));
