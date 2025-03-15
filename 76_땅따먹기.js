// https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
  const score = land[0].slice();
  for (i = 1; i < land.length; i++) {
    for (j = 0; j < 4; j++) {
      const tempLand = [...land[i].slice(0, j), ...land[i].slice(j + 1, 4)];
      score[j] = Math.max(
        score[j] + tempLand[0],
        score[j] + tempLand[1],
        score[j] + tempLand[2]
      );
    }
  }
  return Math.max(...score);
}

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      // 이전 행에서 현재 열을 제외한 최댓값을 찾기
      land[i][j] += Math.max(...land[i - 1].filter((_, index) => index !== j));
    }
  }
  return Math.max(...land[land.length - 1]);
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
