function solution(n) {
    for (let x = 2; x < n; x++) {  // x는 2부터 시작해서 n보다 작은 수까지
        if (n % x == 1) {          // n을 x로 나눈 나머지가 1인 경우
            return x;              // 그 값을 반환
        }
    }
    return -1;  // 예외 처리 (이 경우는 발생하지 않음)
}
