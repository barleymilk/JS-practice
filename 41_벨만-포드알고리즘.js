// 벨만-포드 알고리즘을 구현하라.
// graph의 각 데이터는 배열
// 첫 번째 데이터는 0번 노드 기준으로 연결된 노드 정보, 두 번째 데이터는 1번 노드 기준으로 연결된 노드 정보
// 노드 정보의 구성은 (노드, 가중치)
// source는 시작 노드

// 반환값은 최단 거리를 담은 distance 배열과 최단 거리와 함께 관리할 직전 노드 predecessor를 배열에 담아
// [distance, predecessor] 형식으로 반환하라
// predecessor에서 시작 노드는 null로 표시
// 음의 가중치 순회가 있다면 [-1] 반환

function solution(graph, source) {
  // 그래프의 노드 수
  const numVertices = graph.length;

  // 거리 배열 초기화
  const distance = Array(numVertices).fill(Infinity);
  distance[source] = 0;

  // 직전 경로 배열 초기화
  const predecessor = Array(numVertices).fill(null);

  // 간선 수만큼 반복하여 최단 경로 갱신
  for (let temp = 0; temp < numVertices - 1; temp++) {
    for (let u = 0; u < numVertices; u++) {
      for (const [v, weight] of graph[u]) {
        // 현재 노드 u를 거쳐서 노드 v로 가는 경로의 거리가 기존에 저장된 노드 v까지의 거리보다 짧은 경우
        if (distance[u] + weight < distance[v]) {
          // 최단 거리 갱신
          distance[v] = distance[u] + weight;
          // 직전 경로를 업데이트
          predecessor[v] = u;
        }
      }
    }
  }

  // 음의 가중치 순회 체크
  for (let u = 0; u < numVertices; u++) {
    for (const [v, weight] of graph[u]) {
      // 현재 노드 u를 거쳐서 노드 v로 가는 경로의 거리가 기존에 저장된 노드 v까지의 거리보다 짧은 경우
      if (distance[u] + weight < distance[v]) {
        // 음의 가중치 순회가 발견되었으므로 [-1]을 반환
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}

console.log(
  solution(
    [
      [
        [1, 4],
        [2, 3],
        [4, -6],
      ],
      [[3, 5]],
      [[1, 2]],
      [
        [0, 7],
        [2, 4],
      ],
      [[2, 2]],
    ],
    0
  )
);

console.log(
  solution(
    [
      [
        [1, 5],
        [2, -1],
      ],
      [[2, 2]],
      [[3, -2]],
      [
        [0, 2],
        [1, 6],
      ],
    ],
    0
  )
);
