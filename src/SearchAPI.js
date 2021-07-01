import axios from "axios";

// API키를 상수에 선언.
const TMDB_KEY = "3b657ad90355e4ff973a1a4745dac62a";

// request url 만들기
const makeRequest = async (path, params) => {
    return (
    await axios.get(`https://api.themoviedb.org/3${path}`, 
        {params: {
            api_key : TMDB_KEY,
            query : 'hello'
        }}
        )
    )
}


const getResponse = async (path, params = {}) => {
    try {
        //makeRequest 함수의 response는 'data' 로 들어오고 그 값을 results 상수에 할당
        const {data : { results }} = await makeRequest(path, params)
        return [results, null]
    } catch(e) {
        console.log(e);
        return [null, e];
    }
}

export const searchAPI = {
    searchMovies : () => getResponse("/search/movie"),
    searchPeople : () => getResponse("/search/person"),
    searchTV : () => getResponse("/search/tv")
}