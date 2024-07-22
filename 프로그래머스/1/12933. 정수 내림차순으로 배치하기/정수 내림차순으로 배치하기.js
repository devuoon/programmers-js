function solution(n) {
    var answer = parseInt((n+'').split('').sort((a,b) => b - a).join(''));
    return answer;
}