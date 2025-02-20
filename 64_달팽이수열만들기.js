function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));
  const direction = [
    [0, 1], // 오른쪽
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [-1, 0], // 위
  ];

  let d = 0; // 시작 방향
  let [x, y] = [0, 0]; // 시작 좌표

  for (let i = 1; i <= n * n; i++) {
    answer[x][y] = i;

    const [nx, ny] = [x + direction[d][0], y + direction[d][1]];

    if (nx >= 0 && nx < n && ny >= 0 && ny < n && answer[nx][ny] === 0) {
      [x, y] = [nx, ny];
    } else {
      d = (d + 1) % 4;
      x += direction[d][0];
      y += direction[d][1];
    }
  }

  return answer;
}

console.log(solution(3));
console.log(solution(4));
