// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  const hashMap = new Map();

  // 참가자 목록을 해시맵에 저장
  for (let p of participant) {
    hashMap.set(p, (hashMap.get(p) || 0) + 1);
  }

  // 완주자 목록을 해시맵에서 차감
  for (let c of completion) {
    hashMap.set(c, hashMap.get(c) - 1);
  }

  // 값이 0이 아닌 참가자 반환
  for (let [key, value] of hashMap) {
    if (value > 0) {
      return key;
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
