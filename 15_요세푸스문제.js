// N명의 사람이 원 형태로 서 있습니다. 각 사람은 1부터 N까지 번호표를 갖고 있습니다.
// 그리고 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앱니다.
// - 1번 번호표를 가진 사람을 기준으로 K번째 사람을 없앱니다.
// - 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 없앱니다.
// N과 K가 주어질 때 마지막에 살아있는 사람의 번호를 반환하는 solution() 함수를 구현해주세요
// N과 K는 1 이상 1000 이하의 자연수입니다.

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(N, K) {
  const queue = new Queue();
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    // K-1번째 요소까지 다시 큐로 집어넣기
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop(); // K번째 요소 제거
  }

  return queue.pop(); // 마지막으로 남은 요소 반환
}

console.log(solution(5, 2)); // 3
