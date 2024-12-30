// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const supoja1 = [1, 2, 3, 4, 5];
  const supoja2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoja3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const correctCount = { 1: 0, 2: 0, 3: 0 };

  for (let i = 0; i < answers.length; i++) {
    correctCount[1] += supoja1[i % 5] === answers[i];
    correctCount[2] += supoja2[i % 8] === answers[i];
    correctCount[3] += supoja3[i % 10] === answers[i];
  }

  const maxCount = Math.max(...Object.values(correctCount));
  const mostCorrectSupoja = Object.keys(correctCount).filter(key => correctCount[key] === maxCount);
  return mostCorrectSupoja.map(Number);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
