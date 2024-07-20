function solution(cipher, code) {
    var answer = [];
    let arr = [...cipher];
    for(i=1; i<=arr.length; i++) {
        if(i % code == 0) {
            answer.push(arr[i-1]);
        }
    }
    return answer.join('');
}