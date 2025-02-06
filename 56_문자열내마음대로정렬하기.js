// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  strings.sort(function (a, b) {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1; // 인덱스가 같다면 더 큰 문자열을 앞으로 정렬
    } else {
      return a[n] > b[n] ? 1 : -1; // 인덱스가 다르다면 더 작은 문자에 해당하는 문자열 앞으로 정렬
    }
  });
  return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
