function solution(n) {
    // 숫자를 문자열로 변환하고, 문자열을 배열로 변환
    let str = n.toString();
    let arr = [...str];
    
    // 배열을 뒤집고, 각 원소를 숫자로 변환
    let reversedArr = arr.reverse().map(Number);
    
    return reversedArr;
}