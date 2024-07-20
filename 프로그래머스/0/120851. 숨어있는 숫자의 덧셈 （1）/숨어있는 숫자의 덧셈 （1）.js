function solution(my_string) {
    let answer = my_string.replace(/[a-z]/gi, 0)
                    .split('')
                    .reduce((acc,cur)=>acc + (parseInt(cur) || 0), 0);
    return answer
}
