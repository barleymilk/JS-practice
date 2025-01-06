// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  let index1 = 0;
  let index2 = 0;

  for (let g of goal) {
    if (cards1[index1] === g) {
      index1++;
    } else if (cards2[index2] === g) {
      index2++;
    } else {
      return "No";
    }
  }
  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
