function solution(phone_number) {
    var answer = phone_number.slice(0, -4).replace(/./g, '*') + phone_number.slice(-4);
    return answer;
}
