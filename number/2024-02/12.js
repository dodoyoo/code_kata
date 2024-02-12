// n보다 커질 때까지 더하기

/*
문제
정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

제한사항
* 1 ≤ numbers의 길이 ≤ 100
* 1 ≤ numbers의 원소 ≤ 100
* 0 ≤ n < numbers의 모든 원소의 합
*/

function solution(numbers, n) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (answer <= n) {
      answer = answer += numbers[i];
    }
  }
  return answer;
}

/*
고민
- 정수의 배열이 주어지고 그에 대힌 정수 값이 나옴

해결
- 반복문을 사용해서 numbers의 숫자를 알 수 있도록 설정을 해주고
- 조건문에서 n보다 설정값이 같거나 작으면
- numbers에 i를 더해준다면 원하는 값을 만들어 낼 수 있다.
*/
