// 양꼬치

/*
문제
머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다.
양꼬치는 1인분에 12000원, 음료수는 2000원입니다.
정수 n과 k가 매개변수로 주어졌을 때,
양꼬치 n인분과 음료수 k개를 먹었다면 총 얼마를 지불해야 하는지
Return 하도록 solution 함수를 완성해주세요.
*/

function solution(n, k) {
  const f = 12000;
  const d = 2000;
  if ((n) => 10) {
    return f * n + k * d - Math.trunc(n / 10) * d;
  } else {
    return f * n + k * d - d;
  }
}

console.log(solution(10, 3)); // 124,000
console.log(solution(64, 6)); // 768,000

// case 2
function solution(n, k) {
  return n * 12000 + k * 2000 - parseInt(n / 10) * 2000;
}
