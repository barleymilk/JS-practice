// 첫 번째 인수 lst를 이용하여 이진 탐색 트리를 생성하고,
// 두 번째 인수 searchList에 있는 각 노드를 이진 탐색 트리에서 찾을 수 있는지 확인하여
// true 또는 false를 담은 배열 result를 반환하는 함수 solution()을 작성하라.

function preorder(nodes, idx, isExistNode) {
  if (idx >= nodes.length) {
    return false;
  }
  if (nodes[idx] === isExistNode) {
    return true;
  }
  return (
    preorder(nodes, idx * 2 + 1, isExistNode) ||
    preorder(nodes, idx * 2 + 2, isExistNode)
  );
}

function solution(lst, searchList) {
  const answer = [];
  for (let i = 0; i < searchList.length; i++) {
    answer.push(preorder(lst, 0, searchList[i]));
  }
  return answer;
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
