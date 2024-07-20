function solution(my_string) {
    let stringRep = my_string.replace(/[a-z]/gi, 0);
    let arr = [...stringRep];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i]);
        sum += num;
    }
    return sum;
}
