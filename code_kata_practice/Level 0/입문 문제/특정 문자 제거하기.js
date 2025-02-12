// 특정 문자 제거하기

/*
문제
문자열 my_string과 문자 letter이 매개변수로 주어집니다.
my_string에서 letter를 제거한 문자열을 return 하도록
solution 함수를 완성해주세요.
*/

function solution(my_string, letter) {
  const regex = new RegExp(letter, 'g');
  return my_string.replace(regex, '');
}

console.log(solution('abcdef', 'f')); // "abcde"
console.log(solution('BCBdbe', 'B')); // "Cdbe"

// case2
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('');
  return answer;
}
