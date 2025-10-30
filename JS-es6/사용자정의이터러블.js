// JS코드:
// Extensions -> code runner 설치 후
// ctrl + alt + N으로 코드 실행

/*
## 이터러블/이터레이트 프로토콜
 - 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]()를 가진 값
 - 이터레이터: { value, done } 객체를 리턴하는 next()를 가진 값
 - 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 한 규약
*/

// 사용자 정의 이터러블
// 3, 2, 1을 return하는 기능
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};
let iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// [ 결과 ]
// { value: 3, done: false }
// { value: 2, done: false }
// { value: 1, done: false }
// { done: true }
// { done: true }
console.log(iterator.next());
for (const a of iterator) console.log(a);

// for (const a of iterable) console.log(a);
// [ 결과 ]
// 3
// 2
// 1

// const arr = [1, 2, 3];
// let iter = arr[Symbol.iterator]();
// iter.next();
// console.log(iter[Symbol.iterator]); // [Function: [Symbol.iterator]]
// console.log(iter[Symbol.iterator]() === iter); // true
// for (const a of iter) console.log(a);
// [ 결과 ]
// 2
// 3

// 이전까지 진행했던 자기 상태를 기억해서 next()를 할 수 있도록 만든 well-formed iterator를 만들자.

console.log(document.querySelectorAll("*"));
