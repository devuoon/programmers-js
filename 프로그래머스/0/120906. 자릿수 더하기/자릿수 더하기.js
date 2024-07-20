function solution(n) {
    let str = String(n);
    var answer = str.split('');
    let sum = 0;
    for(i=0; i<answer.length; i++) {
        sum += parseInt(answer[i]);
    }
    return sum;
}