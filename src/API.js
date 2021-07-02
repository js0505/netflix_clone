import axios from "axios";

// API키를 상수에 선언.
const TMDB_KEY = "3b657ad90355e4ff973a1a4745dac62a";

// request url 만들기
const makeRequest = async (path, params) => {
    return (
    await axios.get(`https://api.themoviedb.org/3${path}`, {params: {api_key : TMDB_KEY,...params}})
    )
}

// 수업시에 함수명은 getAnything 이었으나,
// 공부 하면서 알아보기 쉽게 함수명 변경 해보기.

const getResponse = async (path, params = {}) => {
    try {
        // {data : { results }} = ES6의 새로운 문법.
        // 여기선 axios로 들어온 데이터가 객체 형태로 들어오고
        // 응답 스키마 안에 {data : { 응답 들어온 내용 }}이 들어 있으므로
        // data.results 를 새로운 문법으로 작성하고
        // key 값을 그대로 상수에 담은 뒤에 리턴.
        const {data : { results }} = await makeRequest(path, params)
        return [results, null]
        //왜 배열로 리턴을 하는지 ? -> 데이터를 리턴받는 route 페이지에서 정상 응답, 에러를 배열로 받음.
    } catch(e) {
        console.log(e);
        return [null, e];
    }
}

// const getResponse = async (path, params = {}) => {
//     await axios
//         .get(`https://api.themoviedb.org/3${path}`, {params: {api_key : TMDB_KEY,...params}})
//         .then(res => {
//             const {data : { results }} = res;
//             return [results, null]
//         })
//         .catch(err => console.log(err))
// } 



// getResponse 함수를 통해 공통된 주소 이후의 path 값을 인자로 보낸다.
export const movieAPI = {
    nowPlaying : () => getResponse("/movie/now_playing"),
    topRated : () => getResponse("/movie/top_rated"),
    upComing : () => getResponse("/movie/upcoming")
}

export const tvAPI = {
    airingToday : () => getResponse("/tv/airing_today"),
    onTheAir : () => getResponse("/tv/on_the_air"),
    topRated : () => getResponse("/tv/top_rated")
}

// export const searchAPI = {
//     searchMovies : () => getResponse("/search/movie"),
//     searchPeople : () => getResponse("/search/person"),
//     searchTV : () => getResponse("/search/tv")
// }