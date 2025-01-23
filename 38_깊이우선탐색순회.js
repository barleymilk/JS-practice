// 깊이 우선 탐색으로 모든 그래프의 노드를 순회하는 함수 solution()을 작성하라.
// 시작 노드는 start로 주어진다.
// graph는 [출발노드, 도착노드]쌍들이 들어 있는 배열이다.
// 반환값은 그래프의 시작 노드부터 모든 노드를 깊이 우선 탐색으로 진행한 순서대로 노드가 저장된 리스트이다.

function solution(graph, start) {
  // 그래프를 인접 리스트로 변환
  const adjList = {};
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  // DFS 탐색 함수
  function dfs(node, visited, result) {
    visited.add(node); // 현재 노드를 방문한 노드들의 집합에 추가
    result.push(node); // 현재 노드를 결과 배열에 추가
    (adjList[node] || []).forEach((neighbor) => {
      // 현재 노드와 인접한 노드 순회
      if (!visited.has(neighbor)) {
        // 아직 방문하지 않은 노드라면
        dfs(neighbor, visited, result);
      }
    });
  }

  // DFS를 순회한 결과를 반환
  const visited = new Set();
  const result = [];
  dfs(start, visited, result); // 시작 노드에서 깊이 우선 탐색 시작

  return result;
}

console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
);
console.log(
  solution(
    [
      ["A", "B"],
      ["A", "C"],
      ["B", "D"],
      ["B", "E"],
      ["C", "F"],
      ["E", "F"],
    ],
    "A"
  )
);
