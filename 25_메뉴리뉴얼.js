// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function combinationRecursion(list, choiceNum) {
  const result = [];

  function helper(items, index) {
    if (items.length === choiceNum) {
      result.push(items);
      return;
    }
    for (let i = index; i < list.length; i++) {
      helper([...items, list[i]], i + 1);
    }
  }
  helper([], 0);

  return result;
}

function solution(orders, course) {
  const menu = new Map();

  // 모든 주문을 처리하여 조합 생성 및 카운트
  orders.forEach((order) => {
    const orderList = order.split("").sort();
    course.forEach((c) => {
      combinationRecursion(orderList, c).forEach((combi) => {
        const combiMenu = combi.join("");
        menu.set(combiMenu, (menu.get(combiMenu) || 0) + 1);
      });
    });
  });

  // 코스 별로 가장 많이 주문된 메뉴 찾기
  const result = [];
  course.forEach((c) => {
    let maxCount = 2;
    const temp = [];
    menu.forEach((count, key) => {
      if (key.length === c) {
        if (count > maxCount) {
          maxCount = count;
          temp.length = 0;
          temp.push(key);
        } else if (count === maxCount) {
          temp.push(key);
        }
      }
    });
    result.push(...temp);
  });

  return result.sort();
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);

console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
);

console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
