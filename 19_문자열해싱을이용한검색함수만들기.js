// 문자열 리스트 stringList와 쿼리 리스트 queryList가 있을 때
// 각 쿼리 리스트에 있는 문자열이 stringList의 문자열 리스트에 있는지 여부를 확인해야 한다.
// 문자열이 있으면 true, 없으면 false가 된다.
// 각 문자열에 대해서 문자열의 존재 여부를 리스트 형태로 반환하는 solution() 함수를 작성하라.

function solution1(stringList, queryList) {
  const answer = [];
  for (let fruit of queryList) {
    answer.push(stringList.includes(fruit));
  }
  return answer;
}

function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}

function solution2(stringList, queryList) {
  const hashList = stringList.map((str) => polynomialHash(str));
  const queryHashes = queryList.map((str) => polynomialHash(str));

  const result = [];
  for (const queryHash of queryHashes) {
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

console.log(
  solution2(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
);
