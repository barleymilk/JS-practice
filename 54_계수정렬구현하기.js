// 인자로 받은 문자열 s를 계수 정렬로 정렬하여 반환하는 solution() 함수를 구현하라.
// 문자 관련 정렬이 필요한 경우 계수 정렬을 활용해보자.

function solution(s) {
  const counts = Array(26).fill(0); // 알파벳 개수(26개)만큼 빈도수 배열 생성

  // 문자열의 각 문자에 대한 빈도수를 빈도수 배열에 저장
  for (const c of s) {
    counts[c.charCodeAt(0) - "a".charCodeAt(0)] += 1; // 'a'는 index 0번부터 시작
  }

  // 빈도수 배열을 순회하면서 정렬된 문자열을 생성
  let sortedStr = "";
  for (let i = 0; i < 26; i++) {
    sortedStr += String.fromCharCode(i + "a".charCodeAt(0)).repeat(counts[i]);
  }

  return sortedStr;
}

console.log(solution("hello"));
console.log(solution("algorithm"));
