import React, { useEffect, useState } from 'react';
import { tvAPI } from '../../API'

import TVPresenter from './TVPresenter';

const TVContainer = () => {


    const [tvs, setTvs] = useState({
        airingToday: [],
        onTheAir: [],
        topRated: [],
        airingTodayErr: null,
        onTheAirErr: null,
        topRatedErr: null,
        loading: true
    });

    const getTvs = async () => {
        const [airingToday, airingTodayErr] = await tvAPI.airingToday();
        const [onTheAir, onTheAirErr] = await tvAPI.onTheAir();
        const [topRated, topRatedErr] = await tvAPI.topRated();

        setTvs({
            airingToday,
            onTheAir,
            topRated,
            airingTodayErr,
            onTheAirErr,
            topRatedErr,
            loading: false
        })
    }

    useEffect(() => {
        getTvs()
    }, [])
    return (
        <TVPresenter {...tvs} />
    );
};

export default TVContainer;