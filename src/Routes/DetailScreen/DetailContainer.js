import React, {useState, useEffect, useCallback} from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { movieAPI, tvAPI } from '../../API'
import DetailPresenter from './DetailPresenter';

const DetailContainer = () => {
    
    const { id } = useParams();

    const location = useLocation();
    
    // id값에 맞는 디테일 데이터, 비슷한 프로그램 데이터
    const [data, setData] = useState({
        result: {},
        similar: [],
        resultErr: null,
        similarErr: null,
        loading: true
    });

    const getData = useCallback( async () => {
            // pathname 안에 /movie/가 있는지 확인.
        const [result, resultErr] = location.pathname.includes('/movie/')
            ? await movieAPI.movieDetail(id)
            : await tvAPI.tvDetail(id)
        
        const [similar, similarErr] = location.pathname.includes('/movie/')
            ? await movieAPI.movieDetailSimilar(id)
            : await tvAPI.tvDetailSimilar(id)

        setData({
            result,
            similar,
            resultErr,
            similarErr,
            loading: false
        })
    },[id, location])

    useEffect(() => {
        getData()
    }, [getData])
    

    return (
        <DetailPresenter {...data} />
    );
};

export default DetailContainer;