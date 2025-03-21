// https://school.programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  const ROW = board.length;
  const COL = board[0].length;

  for (let i = 1; i < ROW; i++) {
    for (let j = 1; j < COL; j++) {
      if (board[i][j] === 1) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const upLeft = board[i - 1][j - 1];
        board[i][j] = Math.min(up, left, upLeft) + 1;
      }
    }
  }
  const maxVal = Math.max(...board.map((row) => Math.max(...row)));
  return maxVal * maxVal;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);
