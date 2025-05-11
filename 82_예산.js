// https://school.programmers.co.kr/learn/courses/30/lessons/12982

// "최대한 많은 부서"의 물품을 구매해 줄 수 있게 하려고 한다.
// 부서별로 신청한 금액이 들어 있는 배열 d, 예산 budget
// 최대 몇 개의 부서에 물품을 지원할 수 있는지 return

function solution(d, budget) {
  d.sort((a, b) => a - b); // 오름차순으로 정렬
  let answer = 0; // 물품 지원받은 부서 개수

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget >= 0) {
      answer++;
    } else {
      break;
    }
  }

  return answer;
}

console.log([1, 3, 2, 5, 4], 9);
