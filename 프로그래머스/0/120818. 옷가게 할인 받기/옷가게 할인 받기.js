function solution(price) {
    var answer = price;
    if (price >= 100000 && price < 300000) 
        return answer = parseInt(Math.floor(price * 0.95,1));
    else if(price >= 300000 && price < 500000)
        return answer = parseInt(Math.floor(price * 0.9,1));
    else if(price >= 500000)
        return answer = parseInt(Math.floor(price * 0.8,1));
    return answer;
}