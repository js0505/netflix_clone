
import axios from "axios";

const TMDB_KEY = "3b657ad90355e4ff973a1a4745dac62a";

const makeRequest = (path, params) => (
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            api_key : TMDB_KEY,
            ...params
        }
    })
)


const getAnything = async (path, params = {}) => {
    try {
        const {
            data : { results }
        } = await makeRequest(path, params)
        return [results, null]
    } catch(e) {
        console.log(e);
        return [null, e];
    }
}


export const movieAPI = {
    nowPlaying : () => getAnything("/movie/now_playing"),
    topRated : () => getAnything("/movie/top_rated"),
    upComing : () => getAnything("/movie/upcoming")
}

export const tvAPI = {
    airingToday : () => getAnything("/tv/airing_today"),
    onTheAir : () => getAnything("/tv/on_the_air"),
    topRated : () => getAnything("/tv/top_rated")
}