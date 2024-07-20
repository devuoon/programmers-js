function solution(array) {
    let maxNum = Math.max(...array);
    let maxIndex = array.indexOf(maxNum)
    var answer = [maxNum, maxIndex];
    return answer;
}