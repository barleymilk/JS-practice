// https://school.programmers.co.kr/learn/courses/30/lessons/12980

// 한 번에 K 칸을 앞으로 점프하거나 -> K만큼 건전지 사용
// (현재까지 온 거리) x 2 에 해당하는 위치로 순간이동 -> 건전지 사용 X -> 더 효율적

// 거리가 N만큼 떨어져 있는 장소에 가려고 한다.
// 건전지 사용량을 줄이기 위해 점프는 최소화.
// 건전지 사용량의 최솟값을 return하는 solution 함수

function solution(N) {
  return N.toString(2) // 2진수 변환
    .split("") // 문자열에서 배열로 변환
    .filter((c) => c === "1").length; // 1의 개수 반환
}

console.log(solution(5));
