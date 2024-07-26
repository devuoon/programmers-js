function solution(x) {
    let arr = String(x).split('');
    var answer = 0;
    
    for(let i=0; i<arr.length; i++) {
        answer += Number(arr[i]);
    }
    
     if (x % answer == 0) {
            return true;
        } else{
            return false;
        }

}