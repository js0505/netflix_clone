import axios from "axios";


const TMDB_KEY = '3b657ad90355e4ff973a1a4745dac62a';


const makeRequest = async (path, params) => {
    return (
        await axios.get(`https://api.themoviedb.org/3${path}`, {params : {api_key : TMDB_KEY, ...params}})
    )
}

const getResponse = async (path, params = {}) => {

    try {
        const {data : {results}} = await makeRequest(path, params);
        return [results, null]
    } catch (e) {
        return [null, e]
    }


}

export const movieAPI = {
    nowPlaying: () => getResponse('/movie/now_playing'),
    topRated: () => getResponse('/movie/top_rated'),
    upComing: () => getResponse('/movie/upcoming')
}

export const tvAPI = {
    airingToday: () => getResponse('/tv/airing_today'),
    onTheAir: () => getResponse('/tv/on_the_air'),
    topRated: () => getResponse('/tv/top_rated')
}