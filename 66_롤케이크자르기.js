// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(topping) {
  let answer = 0;
  const left = new Set(); // 왼쪽 조각의 토핑
  const right = new Map(); // 오른쪽 조각의 토핑 (종류별 개수)

  // 초기 오른쪽에 모든 토핑 추가
  for (const t of topping) {
    right.set(t, (right.get(t) || 0) + 1);
  }

  // 왼쪽으로 하나씩 옮기면서 비교
  for (const t of topping) {
    // 왼쪽에 추가
    left.add(t);

    // 오른쪽에서 제거
    right.set(t, right.get(t) - 1);
    if (right.get(t) == 0) right.delete(t);

    // 토핑 종류 수 비교
    if (left.size === right.size) answer++;
  }
  return answer;
}

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2]));
