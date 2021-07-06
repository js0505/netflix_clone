import React, {useState, useEffect} from 'react';
import {movieAPI} from '../../API'
import HomePresenter from './HomePresenter';

//기존 페이지 부분을 container로


const HomeContainer = () => {

    // const [nowPlaying , setNowPlaying] = useState([]);
    // const [topRated, setTopRated] = useState([]);
    // const [upComing, setUpComing] = useState([]);

    // const [nowPlayingErr, setNowPlayingErr] = useState("");

    const [movies, setMovies] = useState({
        nowPlaying: [],
        topRated: [],
        upComing: [],
        nowPlayingErr: null,
        topRatedErr: null,
        upComingErr: null
    })
    
    const getData = async () => {
        const [nowPlaying , nowPlayingErr] = await movieAPI.nowPlaying();
        const [upComing, upComingErr] = await movieAPI.upComing();
        const [topRated, topRatedErr] = await movieAPI.topRated();
        
        setMovies({
            nowPlaying,
            topRated,
            upComing,
            nowPlayingErr,
            upComingErr,
            topRatedErr
        })
        // setNowPlaying(nowPlaying);
        // setTopRated(upComing);
        // setUpComing(topRated);

        // setNowPlayingErr(nowPlayingErr);

        
    }

    useEffect(() => {
        getData()
    },[])


    return (
        <HomePresenter {...movies} />
    );
};

export default HomeContainer;