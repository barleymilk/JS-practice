// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let cnt = 0;
  let deletedZeroCnt = 0;

  while (s !== "1") {
    cnt++;
    const zeros = s.split("0").length - 1; // 0의 개수 세기
    deletedZeroCnt += zeros;

    s = s.replace(/0/g, ""); // 0 제거
    s = s.length.toString(2); // 남은 '1'의 길이를 이진수로 변환
  }

  return [cnt, deletedZeroCnt];
}

console.log(solution("110010101001")); // [3, 8]
console.log(solution("01110")); // [3, 3]
console.log(solution("1111111")); // [4, 0]
