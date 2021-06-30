import React,{useEffect} from 'react';
import {movieAPI} from '../API'

const Home = () => {

    // const getData = async () => {
    //     const [results, resultsErr] = await movieAPI.nowPlaying()
    //     console.log("++++++++++++++++", results)
    // }

    // useEffect(() => {
    //     getData()
    // },[])


    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;