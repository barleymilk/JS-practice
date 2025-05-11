// 무게와 가치가 있는 짐 items, 배낭 weightLimit이 주어짐
// weightLimit은 1 이상 10,000 이하의 자연수
// items의 길이는 1 이상 1,000 이하

function calculationUnitValue(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].push(items[i][1] / items[i][0]);
  }
  return items;
}

function sortByUnitValue(items) {
  items.sort((a, b) => b[2] - a[2]);
  return items;
}

function knapsack(items, weightLimit) {
  let totalValue = 0;
  let remainingWeight = weightLimit;

  for (let i = 0; i < items.length; i++) {
    if (items[i][0] <= remainingWeight) {
      totalValue += items[i][1];
      remainingWeight -= items[i][0];
    } else {
      const fraction = remainingWeight / items[i][0];
      totalValue += items[i][1] * fraction;
      break;
    }
  }
  return totalValue;
}

function solution(items, weightLimit) {
  items = calculationUnitValue(items);
  items = sortByUnitValue(items);
  return knapsack(items, weightLimit);
}

console.log(
  solution(
    [
      [10, 19],
      [7, 10],
      [6, 10],
    ],
    15
  )
);
