// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  const stack = [];
  let result = 0;

  for (const m of moves) {
    const col = m - 1; // 열 인덱스 미리 계산

    for (let i = 0; i < board.length; i++) {
      if (board[i][col] !== 0) {
        const picked = board[i][col];
        board[i][col] = 0; // 인형을 뽑았으므로 초기화

        if (stack.length > 0 && stack[stack.length - 1] === picked) {
          stack.pop(); // 마지막 인형과 같으면 제거
          result += 2;
        } else {
          stack.push(picked); // 아니면 스택에 추가
        }
        break; // 해당 열에서 인형을 찾았으면 종료
      }
    }
  }

  return result;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(board, moves));
