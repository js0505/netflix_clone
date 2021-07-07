import React, { useState, useEffect } from 'react';

import {movieAPI} from '../../API'
import HomePresenter from './HomePresenter';

const HomeContainer = () => {

    const [movie, setMovie] = useState({
        nowPlaying: [],
        topRated: [],
        upComing: [],
        nowPlayingErr: null,
        topRatedErr: null,
        upComingErr: null,
        loading: true
    });

    const getMovie = async () => {
        const [nowPlaying, nowPlayingErr] = await movieAPI.nowPlaying();
        const [topRated, topRatedErr] = await movieAPI.topRated();
        const [upComing, upComingErr] = await movieAPI.upComing();

        setMovie({
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
        getMovie()
    },[])

    return (
        <div>
            <HomePresenter {...movie} />
        </div>
    );
};



export default HomeContainer;