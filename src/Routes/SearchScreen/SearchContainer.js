import React,{useState} from 'react';
import { movieAPI, tvAPI } from '../../API';
import SearchPresenter from './SearchPresenter';

const SearchContainer = () => {

    const [keyword, setKeyword] = useState("");
    const [loading, setLoading] = useState(false);

    const [results, setResults] = useState({
        movies: [],
        tvs: [],
        moviesErr: null,
        tvsErr: null,
    })

    const onChange = (e) => setKeyword(e.target.value)

    const getData = async (e) => {
        e.preventDefault()
        setLoading(true)
        const [movies, moviesErr] = await movieAPI.searchMovie(keyword)
        const [tvs, tvsErr] = await tvAPI.searchTv(keyword)

        setResults({
            movies,
            tvs,
            moviesErr,
            tvsErr
        })
        setLoading(false)
    }


    return (
        <SearchPresenter
            {...results}
            keyword={keyword}
            onSubmit={getData}
            onChange={onChange}
            loading={loading}
        />
    );
};

export default SearchContainer;