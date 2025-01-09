// https://school.programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
  const genrePlayCount = {}; // 장르별 재생 횟수 합계
  const genreSongs = {}; // 장르별 곡 정보

  genres.forEach((genre, i) => {
    const play = plays[i];
    if (!genrePlayCount[genre]) {
      genrePlayCount[genre] = 0;
      genreSongs[genre] = [];
    }
    genrePlayCount[genre] += play;
    genreSongs[genre].push({ id: i, play });
  });

  // 재생 횟수 합계 기준 -> 장르 졍렬
  const sortedGenres = Object.keys(genrePlayCount).sort(
    (a, b) => genrePlayCount[b] - genrePlayCount[a]
  );

  const result = [];
  sortedGenres.forEach((genre) => {
    // 재생횟수, 고유번호 기준으로 장르별 곡 정렬
    const sortedSongs = genreSongs[genre].sort((a, b) => {
      if (b.play === a.play) {
        return a.id - b.id;
      }
      return b.play - a.play;
    });

    // 최대 두 곡 선택
    sortedSongs.slice(0, 2).forEach((song) => result.push(song.id));
  });

  return result;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
);
