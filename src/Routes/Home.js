import React, {useState, useEffect} from 'react';
import {movieAPI} from '../API'

const Home = () => {

    const [nowPlaying , setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upComing, setUpComing] = useState([]);

    
    const getData = async () => {
        const [nowRes , nowResErr] = await movieAPI.nowPlaying();
        setNowPlaying(nowRes);

        const [topRes, topResErr] = await movieAPI.topRated();
        setTopRated(topRes);
        
        const [upRes, upResErr] = await movieAPI.upComing();
        setUpComing(upRes);

        console.log(nowResErr, topResErr, upResErr);
    }

    useEffect(() => {
        getData()
    },[])


    return (
        <div>
            <div>
                {nowPlaying.map(item => (
                    <h1>{item.title}</h1>
                ))}
            </div>

            <br />
            <br />
            
            <div>
                {topRated.map(item => (
                    <h3>{item.title}</h3>
                ))}
            </div>
            <br />
            <br />
            
            <div>
                {upComing.map(item => (
                    <h3>{item.title}</h3>
                ))}
            </div>
        </div>
    );
};

export default Home;