function solution(decimal) {
  const stack = [];

  while (decimal) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length) {
    binary += stack.pop();
  }
  return binary;
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));