// 상호배타적 집합을 표현하고 관리하는 데 다음 두 연산이 필요하다.
// - union(x, y) : x와 y가 속한 두 집합을 합친다.
// - find(x) : x가 속한 집합의 대표 원소를 찾는다.

// operations라는 배열은 수행할 연산을 의미한다.
// ['u', 1, 2] : 노드 1과 노드 2에 대해 union 연산 수행
// ['f', 3] : 노드 3의 루트노드 찾기, find 연산 수행

// 초기의 노드는 부모 노드를 자신의 값으로 설정했다고 가정하며,
// 여기서는 각 집합의 루트 노드를 기준으로 루트 노드가 작은 노드를 더 큰 노드의 자식으로 연결하는 방법을 사용한다.
// operations에 있는 연산을 모두 수행한 후 집합의 개수를 반환하는 solution()함수를 구현하라.

// 루트 노드 찾는 함수
function find(parents, x) {
  // 만약 x의 부모가 자기 자신이면, 즉 x가 루트 노드라면
  if (parents[x] === x) {
    return x;
  }

  // 그렇지 않다면 x의 부모를 찾아서 parents[x]에 저장
  // 그 부모 노드의 루트 노드를 찾아서 parents[x]에 저장
  // 이 부분이 경로 압축에 해당
  parents[x] = find(parents, parents[x]);
  return parents[x]; // parents[x]를 반환
}

// 두 개의 집합을 합치는 함수
function union(parents, x, y) {
  const root1 = find(parents, x); // x가 속한 집합의 루트 노드 찾기
  const root2 = find(parents, y); // y가 속한 집합의 루트 노드 찾기

  parents[root2] = root1; // y가 속한 집합을 x가 속한 집합에 합침
}

function solution(k, operations) {
  // 처음에는 각 노드가 자기 자신을 부모로 가지도록 초기화
  const parents = Array.from({ length: k }, (_, i) => i);
  let n = k; // 집합의 개수를 저장할 변수, 처음에는 모든 노드가 서로 다른 집합에 있으므로 k

  for (const op of operations) {
    if (op[0] === "u") {
      union(parents, op[1], op[2]);
    } else if (op[0] === "f") {
      find(parents, op[1]);
    }

    // 모든 노드의 루트 노드를 찾아서 집합의 개수를 계산
    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;
  }

  return n; // 집합 개수 반환
}

console.log(
  solution(3, [
    ["u", 0, 1],
    ["u", 1, 2],
    ["f", 2],
  ])
);
