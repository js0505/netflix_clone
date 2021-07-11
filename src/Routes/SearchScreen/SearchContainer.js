import React,{useState, useEffect} from 'react';
import { movieAPI, tvAPI } from '../../API';

const SearchContainer = () => {

    const [keyword, setKeyword] = useState('');

    const [results, setResults] = useState({
        movies: [],
        tvs: [],
        moviesErr: null,
        tvsErr: null,
        loading: false
    })

    const onSubmit = async () => {
        setResults({ loading: true })
        if (keyword === "") {
            return;
        }

        const [movies, moviesErr] = await movieAPI.searchMovie(keyword)
        const [tvs, tvsErr] = await tvAPI.searchTv(keyword)

        setResults({
            movies,
            tvs,
            moviesErr,
            tvsErr,
            loading: false
        })
    }


    return (
        <div>
            
        </div>
    );
};

export default SearchContainer;