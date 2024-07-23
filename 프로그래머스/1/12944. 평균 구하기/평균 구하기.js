function solution(arr) {
    // 1. 배열의 값 더하기 / 배열 값 갯수
    var answer = arr.reduce((arr,cur) => arr + cur)/arr.length;
    return answer;
}