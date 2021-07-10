import React, { useEffect, useState } from 'react';

import {movieAPI} from '../../API'
import HomePresenter from './HomePresenter'

const HomeContainer = () => {

    const [movies, setMovies] = useState({
        nowPlaying: [],
        topRated: [],
        upComing: [],
        nowPlayingErr: null,
        topRatedErr: null,
        upComingErr: null,
        loading: true
    });

    const getMovies = async () => {
        const [nowPlaying, nowPlayingErr] = await movieAPI.nowPlaying();
        const [topRated, topRatedErr] = await movieAPI.topRated();
        const [upComing, upComingErr] = await movieAPI.upComing();

        setMovies({
            nowPlaying,
            topRated,
            upComing,
            nowPlayingErr,
            topRatedErr,
            upComingErr,
            loading: false
        })
    }

    useEffect(() => {
        getMovies();
    }, [])


    return (
        <div>
            <HomePresenter {...movies} />
        </div>
    );
};

export default HomeContainer;