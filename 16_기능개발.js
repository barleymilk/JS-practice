// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  const answer = [];

  let maxDay = days[0]; // 첫 번째 작업의 배포 가능 일자
  let count = 0; // 같은 날 배포 가능한 작업 수

  for (let day of days) {
    if (day <= maxDay) {
      // 이전 배포 일자 안에 포함될 경우
      count++;
    } else {
      // 새로운 배포 그룹 시작
      answer.push(count); // 이전 그룹 배포
      count = 1; // 새로운 그룹 초기화
      maxDay = day; // 최대 일자 업데이트
    }
  }
  answer.push(count); // 마지막 배포 그룹 추가가
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
