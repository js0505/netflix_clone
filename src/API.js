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
        //makeRequest 함수의 response는 'data' 로 들어오고 그 값을 results 상수에 할당
        const {data : { results }} = await makeRequest(path, params)
        return [results, null]
        //왜 배열로 리턴을 하는지 ?
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