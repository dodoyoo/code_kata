// 대문자와 소문자

/*
문제
문자열 my_string이 매개변수로 주어질 때,
대문자는 소문자로 소문자는 대문자로 변환한 문자열을 
return하는 solution 함수를 완성해주세요.
*/

function solution(my_string) {
  return [...my_string]
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join('');
}

console.log(solution('cccCCC')); // “CCCccc”
console.log(solution('abCdEfghIJ')); //"ABcDeFGHij"

// case 2
function solution(my_string) {
  let answer = '';
  for (let i of my_string) {
    if (i === i.toUpperCase()) {
      answer += i.toLowerCase();
    } else {
      answer += i.toUpperCase();
    }
  }
  return answer;
}
