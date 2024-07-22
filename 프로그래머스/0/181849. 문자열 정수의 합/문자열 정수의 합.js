function solution(num_str) {
    var answer = 0;
    var arr = [...num_str];
    for(i=0; i<arr.length; i++) {
        answer += parseInt(arr[i]);
    }
    return answer;
}