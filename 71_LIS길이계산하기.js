// 정수 배열 nums에서 LIS의 길이를 찾는 함수를 작성하세요.

function solution(nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(solution([1, 4, 2, 3, 1, 5, 7, 3]));
