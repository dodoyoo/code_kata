// 0 떼기

/*
문제
정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(n_str) {
  return n_str.replace(/^0+/, '');
}

/*
고민
- 맨 왼쪽에 오는 0을 제거해줘야함
- 간단하게 왼쪽에 0이 없다면 그대로 나오는 함수를 짜면 되지않을까
- startWith을 사용해서 0으로 시작하지 않는다면 n_str이 나올 수 있도록 하면 될듯…?

해결
- Replace 메서드를 사용하는 것을 선택했다.
- 메서드를 사용할 때 정규표현식을 사용하였으며 이것이 ‘’ 문자열로 바꿀 수 있게 하였다.
*/