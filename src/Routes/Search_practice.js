import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import { searchAPI } from '../API';

const TMDB_KEY = "3b657ad90355e4ff973a1a4745dac62a";

const Search = () => {

    const [search, setSearch] = useState([]);
    const [querys, setQuery] = useState('');

    const makeRequest = async (path, params) => {
        return (
        await axios.get(`https://api.themoviedb.org/3${path}`, 
            {params: {
                api_key : TMDB_KEY,
                query : querys
            }}
            )
        )
    }
    
    
    const getResponse = async (path, params = {}) => {
        try {
            const path = '/search/company'
            //makeRequest 함수의 response는 'data' 로 들어오고 그 값을 results 상수에 할당
            const {data : { results }} = await makeRequest(path, params)
            
            return [results, null] 
        } catch(e) {
            console.log(e);
            return [null, e];
        }
    }

    //여기까지 데이터는 들어옴.
    const getData = async () => {
        const [results, nowPlayingErr] = await getResponse();
        console.log(results)
        setSearch(results)
        return () => {
            
        }
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    };


    return (
        <div>
            <input type='text' onChange={onChange} value={querys}/>
            <button onClick={getData}>다시</button>
            <h1>Search</h1>
            <h2>{search.title}</h2>
        </div>
    );
};

export default Search;

