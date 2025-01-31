// https://school.programmers.co.kr/learn/courses/30/lessons/1844
// 지나가는 값의 최소값 -> 너비 우선 탐색

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  const move = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];
  const n = maps.length;
  const m = maps[0].length;

  const dist = Array.from({ length: n }, () => Array(m).fill(-1)); // 방문하지 않음 : -1

  function bfs(start) {
    const q = new Queue();
    q.push(start);
    dist[start[0]][start[1]] = 1; // 첫 지점 : 비용 1

    while (!q.isEmpty()) {
      const here = q.pop(); // 현재 위치

      for (const [dx, dy] of move) {
        const row = here[0] + dx;
        const col = here[1] + dy;

        if (row < 0 || row >= n || col < 0 || col >= m) {
          // 맵을 벗어나는 위치라면 넘어가기
          continue;
        }
        if (maps[row][col] === 0) {
          // 벽이라면 넘어가기
          continue;
        }

        if (dist[row][col] === -1) {
          // 처음 방문하는 곳일 때
          q.push([row, col]);
          dist[row][col] = dist[here[0]][here[1]] + 1; // (원래 위치의 비용 + 1)을 새로운 위치에 저장
        }
      }
    }
  }

  bfs([0, 0]);

  return dist[n - 1][m - 1]; // 마지막 위치의 비용 반환 (방문하지 못하면 자동으로 -1 반환)
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
