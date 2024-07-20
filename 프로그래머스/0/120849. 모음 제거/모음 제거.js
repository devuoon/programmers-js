function solution(my_string) {
    let str = 'aeiou'
    var answer = my_string.split('').filter((el)=>!str.includes(el)).join('');
    return answer;
}