import axios from "axios";

// API키를 상수에 선언.
const TMDB_KEY = "3b657ad90355e4ff973a1a4745dac62a";

// request url 만들기
const makeRequest = async (path, params) => {
    return (
        await axios.get(`https://api.themoviedb.org/3${path}`, {
            params: {
                api_key: TMDB_KEY,
                ...params
            }
        }
    ))
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
        const {
            //id값으로 detail을 받아오는 데이터는 바로 객체안에 다양한 데이터가 한번에 들어와서
            //그냥 data 로만 받는다.
            data: { results },
            data
        } = await makeRequest(path, params)
        return [results || data, null]
    } catch(e) {
        console.log(e);
        return [null, e];
    }
}


// getResponse 함수를 통해 공통된 주소 이후의 path 값을 인자로 보낸다.
export const movieAPI = {
    nowPlaying : () => getResponse("/movie/now_playing"),
    topRated : () => getResponse("/movie/top_rated"),
    upComing: () => getResponse("/movie/upcoming"),
    movieDetail: (id) => getResponse(`/movie/${id}`)
}

export const tvAPI = {
    airingToday : () => getResponse("/tv/airing_today"),
    onTheAir : () => getResponse("/tv/on_the_air"),
    topRated: () => getResponse("/tv/top_rated"),
    tvDetail: (id) => getResponse(`/tv/${id}`)
}

