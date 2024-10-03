function solution(numbers) {
    var answer = [];
    
    for(i=0; i<numbers.length; i++) {
        for(j=i+1; j<numbers.length; j++) {
            let sum = numbers[i] + numbers[j];
            if (!answer.includes(sum)) {
                answer.push(sum);
            }
            
        }
    }
    
    answer.sort((a,b) => a -b);

    return answer;
}
