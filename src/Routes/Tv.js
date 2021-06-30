import React, {useState, useEffect} from 'react';
import {tvAPI} from '../API'

const Tv = () => {

    const [airingToday, setAiringToday] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);
    const [topRated, setTopRated] = useState([]);

    const getData = async () => {
        const [airRes, airResError] = await tvAPI.airingToday();
        setAiringToday(airRes);
        const [onTheAirRes, onResError] = await tvAPI.onTheAir();
        setOnTheAir(onTheAirRes);
        const [topRatedRes, topResError] = await tvAPI.topRated();
        setTopRated(topRatedRes);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <div>
                {airingToday.map(item => (
                    <h1>{item.name}</h1>
                ))}
            </div>
            <div>
                {onTheAir.map(item => (
                    <p>{item.overview}</p>
                ))}
            </div>
            <div>
                {topRated.map(item => (
                    <span>{item.name}</span>
                ))}
            </div>
        </div>
    );
};

export default Tv;