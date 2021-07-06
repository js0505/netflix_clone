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
        upComingErr: null,
        loading: true
        // 로딩화면 추가
        // state가 로드 될 때 기본으로 true 로
        // Loading 이 떠 있다가
        // set 함수가 실행 되면서 false로 변경되며 데이터가 출력된다.
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
            topRatedErr,
            loading: false
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