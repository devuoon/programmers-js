function solution(money) {
    var answer = [];
    let cups = Math.floor(money/5500);
    let cash = money - (cups*5500);
    answer.push(cups,cash); 
    return answer;
}