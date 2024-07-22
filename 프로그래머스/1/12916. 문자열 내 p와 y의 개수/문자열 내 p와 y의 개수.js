function solution(s){
    var answer = true;
    let pCount = 0;
    let yCount = 0;
    let sLower = s.toLowerCase();
    let arr = [...sLower];
    for (i=0; i<arr.length; i++) {
        if(arr[i] == 'p'){
            pCount++;
        } else if(arr[i] == 'y') {
            yCount++;
        }
    }
    if ( pCount == yCount) {
        return true;
    } else{
        return false;
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(arr)
}