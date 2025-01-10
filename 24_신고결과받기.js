// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  // 유저별 신고받은 수 저장
  const reportedMap = new Map();
  // 유저별 신고한 유저 목록 저장 {'muzi': ['neo', 'apeach']}
  const reportCount = {};
  // 초기화
  for (let id of id_list) {
    reportedMap.set(id, 0);
    reportCount[id] = [];
  }

  for (let r of report) {
    const [reporter, reported] = r.split(" ");
    const temp = reportCount[reporter];
    if (!temp.includes(reported)) {
      // 동일한 유저가 여러 번 신고했을 때 한 번만 신고한 것으로 한다.
      reportCount[reporter] = [...temp, reported];
      reportedMap.set(reported, reportedMap.get(reported) + 1);
    }
  }

  // k 임계점을 넘은 신고자 수만큼 각 유저가 받을 결과 메일 수 배열에 담기
  const result = [];
  for (let id of id_list) {
    let mailCount = 0;
    for (let c of reportCount[id]) {
      if (reportedMap.get(c) >= k) {
        mailCount++;
      }
    }
    result.push(mailCount);
  }

  return result;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
