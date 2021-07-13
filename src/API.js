import axios from 'axios';
import { TMDB_KEY } from './config';


const makeRequest = async (path, params) => {
    return (
        await axios.get(`https://api.themoviedb.org/3${path}`, {params : {api_key : TMDB_KEY, ...params}})
    )
}


const getResponse = async (path, params = {}) => {
    const { data: { results }, data } = await makeRequest(path, params);

    return [results || data, null ]
}


export const movieAPI = {
    nowPlaying: () => getResponse('/movie/now_playing'),
    topRated: () => getResponse('/movie/top_rated'),
    upComing: () => getResponse('/movie/upcoming'),
    movieDetail: (id) => getResponse(`/movie/${id}`),
    movieDetailSimilar: (id) => getResponse(`/movie/${id}/similar`),
    movieDetailVideos: (id) => getResponse(`/movie/${id}/videos`),
    searchMovie: (query) => getResponse(`/search/movie`, {query})
}

export const tvAPI = {
    airingToday: () => getResponse('/tv/airing_today'),
    onTheAir: () => getResponse('/tv/on_the_air'),
    topRated: () => getResponse('/tv/top_rated'),
    tvDetail: (id) => getResponse(`/tv/${id}`),
    tvDetailSimilar: (id) => getResponse(`/tv/${id}/similar`),
    tvDetailVideos: (id) => getResponse(`/tv/${id}/videos`),
    searchTv: (query) => getResponse(`/search/tv`, {query})
}

