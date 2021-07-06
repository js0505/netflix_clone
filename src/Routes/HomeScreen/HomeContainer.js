import React, {useState, useEffect} from 'react';
import {movieAPI} from '../../API'
import HomePresenter from './HomePresenter';

//기존 페이지 부분을 container로


const HomeContainer = () => {


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

        //state 내의 키 값과 받아오는 데이터의 값의 이름을 일치 시키면
        //set 하는 부분에서 간결하게 작성할 수 있다.
        
        const [nowPlaying , nowPlayingErr] = await movieAPI.nowPlaying();
        const [upComing, upComingErr] = await movieAPI.upComing();
        const [topRated, topRatedErr] = await movieAPI.topRated();
        console.log(nowPlaying)
        setMovies({
            nowPlaying,
            topRated,
            upComing,
            nowPlayingErr,
            upComingErr,
            topRatedErr,
            loading: false
        })
    }

    useEffect(() => {
        getData()
    },[])


    return (
        <HomePresenter {...movies} />
    );
};

export default HomeContainer;