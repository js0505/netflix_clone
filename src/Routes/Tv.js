import React, {useState, useEffect} from 'react';
import {tvAPI} from '../API'

const Tv = () => {

    const [airingToday, setAiringToday] = useState([]);
    const [airingTodayError, setAiringTodayError] = useState({});


    const getData = async () => {
        const [res, resError] = await tvAPI.airingToday()
        setAiringToday(res)
        setAiringTodayError(resError)

    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {airingToday.map(item => (
                <h1>{item.name}</h1>
            ))}
        </div>
    );
};

export default Tv;