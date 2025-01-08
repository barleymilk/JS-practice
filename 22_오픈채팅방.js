// https://school.programmers.co.kr/learn/courses/30/lessons/42888

// function solution(record) {
//   const nicknameMap = new Map();
//   const actions = [];
//   for (let r of record) {
//     const [act, id, nickname] = r.split(" ");
//     if (act === "Enter") {
//       nicknameMap.set(id, nickname);
//       actions.push([id, "님이 들어왔습니다."]);
//     } else if (act === "Leave") {
//       actions.push([id, "님이 나갔습니다."]);
//     } else {
//       nicknameMap.set(id, nickname);
//     }
//   }
//   return actions.map(([id, result]) => `${nicknameMap.get(id)}${result}`);
// }

function solution(record) {
  const nicknameMap = new Map();
  const actions = [];

  for (const r of record) {
    const [act, id, nickname] = r.split(" ");
    if (act !== "Leave") nicknameMap.set(id, nickname); // Enter와 Change에서만 업데이트
    if (act !== "Change")
      actions.push([
        id,
        act === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.",
      ]);
  }

  return actions.map(([id, message]) => `${nicknameMap.get(id)}${message}`);
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
