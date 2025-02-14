// 2차원 배열 arr을 시계 방향으로 90도 * n번 회전하는 solution() 함수를 작성하라.
// 회전 횟수 n은 1 ~ 4
// 2차원 배열의 행과 열의 크기는 같고, 행의 크기는 10을 넘지 않는다.

function rotate90(arr) {
  const n = arr.length;
  const rotated = Array.from({ length: n }, () => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][n - i - 1] = arr[i][j];
    }
  }

  return rotated;
}

function solution(arr, n) {
  for (let i = 0; i < n; i++) {
    arr = rotate90(arr);
  }

  return arr;
}

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    1
  )
);
