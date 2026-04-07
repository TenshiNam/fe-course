/**
 * KOBIS, KMDB API를 활용한 박스 오피스
 */
const kobis_key = `6206e4e96646c240ac59f09bc0164ff9`;
const kmdb_key = `59H5F0U0OFQB3R2261VM`;

/** KOBIS API - 박스오피스 가져오기 */
async function getKobis() {
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice`;
    url += `/searchDailyBoxOfficeList.json?`;
    url += `key=${kobis_key}`;
    url += `&targetDt=20260405`;

    let response = await fetch(url);
    return response.json();
}

/** KMDB API - 포스터 가져오기 */
async function getPoster(movieNm, openDt) {
    openDt = openDt.split('-').reduce((acc, cur) => acc + cur);
    
    let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api`;
    url += `/search_json2.jsp?collection=kmdb_new2&detail=Y`;
    url += `&title=${movieNm}`;
    url += `&releaseDts=${openDt}&ServiceKey=${kmdb_key}`;

    let response = await fetch(url);
    let kmdb = await response.json();
    let posters = await kmdb?.Data?.[0]?.Result?.[0]?.posters?.split('|');
    // console.log('result => ' ,posters[0]);

    return posters?.[0];
}

async function createBoxoffice() {
    let kobis = await getKobis();
    let list = kobis.boxOfficeResult.dailyBoxOfficeList;
    console.log(list);

    let showList = list.slice(0, 5).map(async (movie) => {  
        let movieNm = movie.movieNm;
        let openDt = movie.openDt;      
        let poster = await getPoster(movie.movieNm, movie.openDt);           
        // console.log(movie.movieNm, movie.openDt, poster); 
        return { movieNm, openDt, poster}            
    });  //[ {movieNm:영화제목, openDt:개봉일, poster:포스터}, {~}...]

    console.log('showList => ', showList);
    
    
    
}

window.addEventListener('DOMContentLoaded', () => {
        createBoxoffice();
});

