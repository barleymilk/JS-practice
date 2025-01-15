// https://school.programmers.co.kr/learn/courses/30/lessons/159993
// S : 시작 지점
// E : 출구
// L : 레버
// O : 통로
// X : 벽

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

function isValidMove(ny, nx, n, m, maps) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== "X";
}

function appendToQueue(ny, nx, k, time, visited, q) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
  }
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () =>
    Array(m)
      .fill(false)
      .map(() => Array(2).fill(false))
  );

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const q = new Queue();
  let endY = -1;
  let endX = -1;
  // q, visited, endY, endX 초기화
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") {
        q.push([i, j, 0, 0]);
        visited[i][j][0] = true;
      }
      if (maps[i][j] === "E") {
        endY = i;
        endX = j;
      }
    }
  }

  while (!q.isEmpty()) {
    const [y, x, k, time] = q.pop(); // 시작점부터 q에서 pop됨

    // 도착점 E에 도달하고, 레버도 거쳐왔다면 최종 시간 리턴
    if (y === endY && x === endX && k === 1) {
      return time;
    }

    // 4방향
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // 좌표에서 벗어나지 않는지 확인!
      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      if (maps[ny][nx] === "L") {
        // 레버(l)에 도달하면 k = 1
        appendToQueue(ny, nx, 1, time, visited, q);
      } else {
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }

  // 도착점에 도달하지 못한 경우 또는 도착점에 왔지만 레버를 거치지 않은 경우
  return -1;
}

console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
console.log(solution(["LOOXS","OOOOX","OOOOO","OOOOO","EOOOO"]));
