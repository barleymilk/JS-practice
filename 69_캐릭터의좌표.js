// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput, board) {
  const direction = { up: [0, 1], down: [0, -1], right: [1, 0], left: [-1, 0] };
  const width = board[0] / 2;
  const length = board[1] / 2;
  let x = 0;
  let y = 0;
  keyinput.forEach((key) => {
    const nx = x + direction[key][0];
    const ny = y + direction[key][1];
    if (nx > -width && nx < width && ny > -length && ny < length) {
      x = nx;
      y = ny;
    }
  });
  return [x, y];
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11]));
