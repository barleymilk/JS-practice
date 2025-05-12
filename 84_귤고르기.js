// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  // 귤 개수 세기
  const counter = {};
  for (const t of tangerine) {
    counter[t] = (counter[t] || 0) + 1;
  }

  // 개수를 내림차순으로 정렬
  const sortedCounts = Object.values(counter).sort((a, b) => b - a);

  let numTypes = 0; // 현재까지의 종류 개수
  let countSum = 0; // 현재까지의 귤 개수 합

  for (const count of sortedCounts) {
    countSum += count;
    numTypes++;

    // 귤 개수 합이 k에 도달하면 종료
    if (countSum >= k) {
      break;
    }
  }

  return numTypes;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
