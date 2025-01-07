// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  const wantMap = new Map();
  want.forEach((key, i) => {
    wantMap.set(key, number[i]);
  });

  let result = 0;
  const discountMap = new Map();

  // 초기 10일간의 할인 목록으로 Map 초기화
  for (let i = 0; i < 10; i++) {
    discountMap.set(discount[i], (discountMap.get(discount[i]) || 0) + 1);
  }

  // 슬라이딩 윈도우 적용
  for (let i = 0; i <= discount.length - 10; i++) {
    let flag = true;

    // wantMap과 discountMap 비교
    for (let [key, value] of wantMap) {
      if ((discountMap.get(key) || 0) < value) {
        flag = false;
        break;
      }
    }

    if (flag) result++;

    // 윈도우 이동 (왼쪽 요소 제거, 오른쪽 요소 추가)
    if (i + 10 < discount.length) {
      const prev = discount[i];
      const next = discount[i + 10];

      // 이전 요소 제거
      discountMap.set(prev, discountMap.get(prev) - 1);
      if (discountMap.get(prev) === 0) discountMap.delete(prev);

      // 다음 요소 추가
      discountMap.set(next, (discountMap.get(next) || 0) + 1);
    }
  }

  return result;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  )
);
