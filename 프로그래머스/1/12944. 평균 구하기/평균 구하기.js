function solution(arr) {
    // 1. 배열의 값 더하기 / 배열 값 갯수
    var answer = 0;
    let sum = 0;
    for(i=0; i<arr.length; i++){
        sum += arr[i]
        answer = sum / arr.length;
    }
    return answer;
}