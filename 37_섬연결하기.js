// https://school.programmers.co.kr/learn/courses/30/lessons/42861

function find(parent, i) {
  if (parent[i] === i) {
    return i;
  }

  parent[i] = find(parent, parent[i]);
  return parent[i];
}

function union(parent, rank, x, y) {
  const xroot = find(parent, x);
  const yroot = find(parent, y);
  if (rank[xroot] < rank[yroot]) {
    parent[xroot] = yroot;
  } else if (rank[xroot] > rank[yroot]) {
    parent[yroot] = xroot;
  } else {
    parent[yroot] = xroot;
    rank[xroot] += 1;
  }
}

function solution(n, costs) {
  costs.sort((a, b) => a[2] - b[2]); // 비용 오름차순으로 정렬
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array(n).fill(0);

  let minCost = 0;
  let edges = 0;

  for (const edge of costs) {
    if (edges === n - 1) {
      break;
    }

    const x = find(parent, edge[0]);
    const y = find(parent, edge[1]);

    if (x !== y) {
      union(parent, rank, x, y);
      minCost += edge[2];
      edges += 1;
    }
  }
  return minCost;
}

console.log(
  solution(4, [
    [0, 1, 1],
    [0, 2, 2],
    [1, 2, 5],
    [1, 3, 1],
    [2, 3, 8],
  ])
);
