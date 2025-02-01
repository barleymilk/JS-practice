// https://school.programmers.co.kr/learn/courses/30/lessons/43162
// n	computers	return
// 3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	2
// 3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]	1

function dfs(computers, visited, node) {
  visited[node] = true; // 현재 노드 방문 처리
  for (let idx = 0; idx < computers[node].length; idx++) {
    if (computers[node][idx] && !visited[idx]) {
      // 연결되어 있고, 방문하지 않은 노드라면
      dfs(computers, visited, idx); // 해당 노드 방문하러 이동
    }
  }
}

function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false); // 방문 여부 저장
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
