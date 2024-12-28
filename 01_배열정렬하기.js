/*

[ 배열 정렬하기 ]

[ 제약 조건 ]
- 정수 배열의 길이는 2 이상 10^5 이하입니다.
- 정수 배열의 각 데이터 값은 -100,000 이상 100,000 이하입니다.

[ 입출력의 예 ]
입력                    출력
[1, -5, 2, 4, 3]        [-5, 1, 2, 3, 4]
[2, 1, 1, 3, 2, 5, 4]   [1, 1, 2, 2, 3, 4, 5]
[6, 1, 7]               [1, 6, 7]

*/

function solution(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(solution([1, -5, 2, 4, 3]));
console.log(solution([-1, -5, 2, 4, 3]));
console.log(solution([1, 1, 2, 2, 3, 4, 5]));
console.log(solution([1, 6, 7]));
