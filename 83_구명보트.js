// https://school.programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  people.sort((a, b) => a - b); // 오름차순 정렬
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++; // 가장 가벼운 사람 태움
    }
    right--; // 가장 무거운 사람은 항상 보트에 태움
    boats++;
  }
  return boats;
}

console.log(solution([70, 50, 80, 50], 100)); // 3
