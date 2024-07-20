function solution(n) {
    var answer = Math.ceil(n / 7);
    if ( answer < 1) {
        answer = 1;
    }
    return answer;
}