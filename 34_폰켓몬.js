// https://school.programmers.co.kr/learn/courses/30/lessons/1845?language=javascript

function solution(nums) {
  const maxCount = nums.length / 2;
  const uniquePokemonCount = new Set(nums).size;
  return uniquePokemonCount <= maxCount ? uniquePokemonCount : maxCount;
}

console.log(solution([3, 1, 2, 3]));
