// 이진 트리를 표현한 배열 nodes를 인자로 받는다.
// 해당 이진 트리에 대하여 전위 순회, 중위 순회, 후위 순회 결과를 반환하는 solution() 함수를 구현하라.
// [1, 2, 3, 4, 5, 6, 7] -> ["1, 2, 4, 5, 3, 6, 7", "4, 2, 5, 1, 6, 3, 7", "4, 5, 2, 6, 7, 3, 1"]

function preorder(nodes, idx) {
  // idx가 노드 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 루트 노드를 출력한 다음, 왼쪽, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    let ret = `${nodes[idx]} `;
    ret += preorder(nodes, idx * 2 + 1);
    ret += preorder(nodes, idx * 2 + 2);
    return ret;
  }

  // idx >= nodes.length일 때는 빈 문자열 반환
  return "";
}

function inorder(nodes, idx) {
  // idx가 노드 배열의 길이보다 작을 때
  if (idx < nodes.length) {
    // 왼쪽 서브 트리를 먼저 재귀 호출하여 출력 순서대로 이어붙임
    let ret = inorder(nodes, idx * 2 + 1);
    // 루트 노드를 출력한 다음, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    ret += `${nodes[idx]} `;
    ret += inorder(nodes, idx * 2 + 2);
    return ret;
  }

  // idx >= nodes.length일 때는 빈 문자열 반환
  return "";
}

function postorder(nodes, idx) {
  // idx가 노드 배열의 길이보다 작을 떄
  if (idx < nodes.length) {
    // 왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    let ret = postorder(nodes, idx * 2 + 1);
    ret += postorder(nodes, idx * 2 + 2);
    // 루트 노드를 출력함
    ret += `${nodes[idx]} `;
    return ret;
  }

  // idx >= nodes.length일 떄는 빈 문자열 반환
  return "";
}

function solution(nodes) {
  // 전위 순회, 중위 순회, 후위 순회 결과 계산
  // 노드 배열과 루트 노드의 인덱스를 매개변수로 각각 호출
  return [
    preorder(nodes, 0).slice(0, -1), // 마지막 공백 제거
    inorder(nodes, 0).slice(0, -1), // 마지막 공백 제거
    postorder(nodes, 0).slice(0, -1), // 마지막 공백 제거
  ];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
