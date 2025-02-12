/*
문제
문자열 s가 매개변수로 주어집니다.
s에서 한 번만 등장하는 문자를 사전 순으로 정렬한
문자를 return 하도록 solution 함수를 완성해보세요.
한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.
*/

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      answer.push(s[i]);
    }
  }
  return answer.sort().join('');
}

//case 2
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join('');
}
