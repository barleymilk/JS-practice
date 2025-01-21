// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  const uniqueWords = [];
  let lastAlphabet = "";

  for (let i = 0; i < words.length; i++) {
    // 단어 첫글자가 올바른지 확인 & 중복 여부 확인
    if (
      (lastAlphabet && words[i][0] !== lastAlphabet) ||
      uniqueWords.includes(words[i])
    ) {
      const wrongPerson = (i % n) + 1; // 현재 차례의 사람 번호
      const turn = Math.floor(i / n) + 1; // 현재 차례
      return [wrongPerson, turn];
    }

    // 조건 통과 시 단어 추가 및 마지막 글자 업데이트
    uniqueWords.push(words[i]);
    lastAlphabet = words[i].slice(-1);
  }

  return [0, 0]; // 규칙 위반 없는 경우
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);
console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);
console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
