function solution(n)
{
    let str = String(n);
    let arr = [...str];
    var answer = 0;
    for (i=0; i<arr.length; i++) {
        answer += parseInt(arr[i]);
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer);

    return answer;
}