// n개의 양의 정수로 이루어진 리스트 arr과 정수 target이 주어졌을 때
// 이 중에서 합이 target인 두 수가 arr에 있는지 찾고,
// 있으면 true, 없으면 false를 반환하는 solution()함수를 작성하라.

function countSort(arr, k) {
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    if (num <= k) {
      hashtable[num] = 1;
    }
  }
  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num;
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
    ) {
      return true;
    }
  }
  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6));
