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

    //input태그로 입력되는 값을 keyword로 입력.
    const onChange = (e) => setKeyword(e.target.value)

    const getData = async (e) => {
        //onSubmit의 고유 이벤트 동작인 페이지 리프레쉬를 방지한다.
        e.preventDefault()

        //로딩 중
        setLoading(true)
        const [movies, moviesErr] = await movieAPI.searchMovie(keyword)
        const [tvs, tvsErr] = await tvAPI.searchTv(keyword)

        setResults({
            movies,
            tvs,
            moviesErr,
            tvsErr
        })
        //로딩 완료
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