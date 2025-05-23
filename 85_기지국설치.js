// https://school.programmers.co.kr/learn/courses/30/lessons/12979

function solution(N, stations, W) {
  let answer = 0;
  let location = 1; // 현재 탐색하는 아파트의 위치
  let idx = 0; // 설치된 기지국의 인덱스

  while (location <= N) {
    // 기지국이 설치된 위치에 도달한 경우
    if (idx < stations.length && location >= stations[idx] - W) {
      location = stations[idx] + W + 1;
      idx += 1;
    } else {
      location += 2 * W + 1; // 기지국을 설치하고 해당 범위를 넘어감
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(11, [4, 11], 1)); // 3
