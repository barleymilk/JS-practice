// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
  // 문자열을 JSON 형식처럼 변환하여 파싱
  const tupleList = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));

  // 길이순으로 정렬 (튜플 원소의 등장 순서를 보장)
  tupleList.sort((a, b) => a.length - b.length);

  const answer = [];
  const seen = new Set();

  for (const subset of tupleList) {
    for (const num of subset) {
      if (!seen.has(num)) {
        // answer.includes(num) 대신 Set을 사용하여 검색 속도를 O(1)로 줄임
        seen.add(num);
        answer.push(num);
      }
    }
  }

  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}"));
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));
console.log(solution("{{123}}"));
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
