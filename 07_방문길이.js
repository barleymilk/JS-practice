// https://school.programmers.co.kr/learn/courses/30/lessons/49994

// 좌표평면을 벗어나는지 체크하는 함수
function isValidMove(nx, ny) {
  return nx >= -5 && ny >= -5 && nx <= 5 && ny <= 5;
}

// 좌표 이동하는 함수
function updateLocation(x, y, dir) {
  switch (dir) {
    case "U":
      return [x, y + 1];
    case "D":
      return [x, y - 1];
    case "R":
      return [x + 1, y];
    case "L":
      return [x - 1, y];
  }
}

function solution(dirs) {
  let x = 0;
  let y = 0;

  const visited = new Set();
  for (const dir of dirs) {
    // 일단 움직여봐!
    const [nx, ny] = updateLocation(x, y, dir);

    // 움직인게 좌표 안에 있는거 맞아?
    if (!isValidMove(nx, ny)) {
      // 좌표를 벗어난다면 다시 돌아가~
      continue;
    }

    // 좌표 안에 있으면 방문한 경로를 추가하자!
    // A -> B, B -> A 방문한 경로 추가
    visited.add(`${x}${y}${nx}${ny}`); // 이전 좌표 -> 움직인 좌표
    visited.add(`${nx}${ny}${x}${y}`); // 움직인 좌표 -> 이전 좌표

    // 최종 좌표 업데이트
    [x, y] = [nx, ny];
  }

  // 방문한 경로가 양방향으로 저장되어 있기 때문에 2로 나누어야 함.
  return visited.size / 2;
}
