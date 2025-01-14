// https://school.programmers.co.kr/learn/courses/30/lessons/77486

function solution(enroll, referral, seller, amount) {
  // 트리 관계
  const parent = {};
  for (let i = 0; i < enroll.length; i++) {
    parent[enroll[i]] = referral[i];
  }

  // 각 판매자마다 판매 총합 초기화
  const total = {};
  for (const e of enroll) {
    total[e] = 0;
  }

  // 총합 계산
  for (let i = 0; i < seller.length; i++) {
    let money = amount[i] * 100; // 칫솔 한 개 = 100원
    let curSeller = seller[i]; // 현재 판매자

    // 부모 거슬러 올라가기
    while (money > 0 && curSeller !== '-') {
        total[curSeller] += money - Math.floor(money / 10); // 10%를 뗀 가격 총합에 저장
        curSeller = parent[curSeller]; // 부모 거슬러 올라가기
        money = Math.floor(money / 10); // 떼낸 10% 가격 저장
    }
  }

  return enroll.map(v => total[v]);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  )
);
