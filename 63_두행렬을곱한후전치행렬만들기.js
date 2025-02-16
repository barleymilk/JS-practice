// matrix1과 matrix2는 정수값으로 이루어진 3 X 3 행렬이다.
// 이 두 행렬을 곱한 결과의 전치 행렬을 반환하는 solution() 함수를 구하라.

function multiplyMatrices(matrix1, matrix2) {
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

function transposeMatrix(matrix) {
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

function solution(matrix1, matrix2) {
  const multiplied = multiplyMatrices(matrix1, matrix2);
  const transposed = transposeMatrix(multiplied);
  return transposed;
}

console.log(
  solution(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ]
  )
);
