// https://programmers.co.kr/learn/courses/30/lessons/81303

// n: 처음 표의 행 개수
// k: 처음 선택된 행의 위치
// cmd: 수행한 명령어들이 담긴 문자열 배열

// 모든 명령어를 수행한 후 표의 상태와 처음 주어진 표의 상태를 비교하여
// 삭제되지 않은 행은 O, 삭제된 행은 X로 표시하여 문자열 형태로 return

function solution(n, k, cmd) {
  // 연결 리스트를 위한 prev, next 배열
  const prev = Array.from({ length: n }, (_, i) => i - 1);
  const next = Array.from({ length: n }, (_, i) => i + 1);
  next[n - 1] = -1; // 마지막 노드 처리

  const status = Array(n).fill("O"); // 모든 행이 살아있는 상태로 초기화
  const deleted = []; // 삭제된 행을 저장할 스택

  let now = k;

  for (const c of cmd) {
    const [command, value] = c.split(" ");

    if (command === "U") {
      let step = Number(value);
      while (step--) now = prev[now];
    } else if (command === "D") {
      let step = Number(value);
      while (step--) now = next[now];
    } else if (command === "C") {
      deleted.push(now); // 현재 행을 스택에 저장
      status[now] = "X"; // 삭제 표시

      // 연결 리스트 수정
      if (prev[now] !== -1) next[prev[now]] = next[now];
      if (next[now] !== -1) prev[next[now]] = prev[now];

      now = next[now] !== -1 ? next[now] : prev[now]; // 다음 행 선택
    } else if (command === "Z") {
      const restored = deleted.pop(); // 마지막 삭제된 행 복구
      status[restored] = "O";

      // 연결 리스트 복구
      if (prev[restored] !== -1) next[prev[restored]] = restored;
      if (next[restored] !== -1) prev[next[restored]] = restored;
    }
  }

  return status.join("");
}

console.log(
  solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
);
console.log(
  solution(8, 2, [
    "D 2",
    "C",
    "U 3",
    "C",
    "D 4",
    "C",
    "U 2",
    "Z",
    "Z",
    "U 1",
    "C",
  ])
);
