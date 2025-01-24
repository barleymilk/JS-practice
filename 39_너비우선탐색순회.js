class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const item = this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  // 그래프를 인접 리스트로 변환
  const adjList = {};
  for (let [u, v] of graph) {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
    // 양방향 그래프를 원한다면 아래 줄을 추가:
    // if (!adjList[v]) adjList[v] = [];
    // adjList[v].push(u);
  }

  const visited = new Set(); // 방문한 노드를 저장할 셋

  // 탐색 시 맨 처음 방문할 노드 푸시하고 방문 처리
  const queue = new Queue();
  queue.push(start);
  visited.add(start);
  const result = [start];

  // 큐가 비어 있지 않은 동안 반복
  while (!queue.isEmpty()) {
    const node = queue.pop(); // 큐에 있는 원소 중 가장 먼저 푸시된 원소 팝
    for (let neighbor of adjList[node] || []) {
      // 인접한 이웃 노드들에 대해서
      if (!visited.has(neighbor)) {
        // 방문되지 않은 이웃 노드인 경우
        // 이웃 노드를 방문 처리함
        queue.push(neighbor);
        visited.add(neighbor);
        result.push(neighbor);
      }
    }
  }

  return result;
}

// 올바른 그래프 입력
console.log(
  solution(
    [
      [1, 2],
      [1, 3],
      [2, 4],
      [2, 5],
      [3, 6],
      [3, 7],
      [4, 8],
      [5, 8],
      [6, 9],
      [7, 9],
    ],
    1
  )
);
