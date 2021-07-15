import React,{useState} from 'react';
import { movieAPI, tvAPI } from '../../API';
import SearchPresenter from './SearchPresenter';

const SearchContainer = () => {

    const [keyword, setKeyword] = useState("");
    //다른 페이지와 다르게 검색 페이지는 폼 입력 후에 데이터가 로드 되므로
    //기존처럼 객체로 넣어두면 로딩이 필요하기 전에 이미 로딩 페이지가 로드 되어있어 버린다.
    // 그래서 데이터를 받아오는 작업이 시작되면 로딩 화면출력, 로드 끝나면 전환 을 위해서
    // state로 로딩을 관리한다.
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
            tvsErr,
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