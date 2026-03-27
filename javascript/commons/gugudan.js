/**
 * 싱글 구구단 정의
 */
export function singleGuGudan(dan) {
    const title = `
/***************************/
           ${dan}단
/***************************/`;
    
    console.log(title); // 정의하신 타이틀을 출력합니다.

    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} ❌ ${i} = ${dan * i}`);
    }
}
/**
 * 멀티 구구단 정의 (가로 출력 버전)
 */
export function multiGugudan(dan1, dan2) {
    const title = `\n/***** ${dan1}단 ~ ${dan2}단 까지 출력합니다 *****/`;
    console.log(title);   

    // i는 1부터 9까지 (행)
    for (let i = 1; i <= 9; i++) {
        let rows = ''; // 각 줄을 시작할 때 빈 문자열로 초기화

        // j는 dan1부터 dan2까지 (열)
        for (let j = dan1; j <= dan2; j++) {
            // 한 줄에 여러 단을 이어 붙입니다. (\t는 탭 간격)
            rows += `${j} ❌ ${i} = ${j * i}\t`; 
        }

        // 한 줄(행) 작성이 끝나면 출력!
        console.log(rows);
    }
}