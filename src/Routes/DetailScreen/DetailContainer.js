import React, {useState, useEffect, useCallback} from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { movieAPI, tvAPI } from '../../API'
import DetailPresenter from './DetailPresenter';

const DetailContainer = () => {
    
    const { id } = useParams();

    const location = useLocation();
    
    const [data, setData] = useState({
        result: {},
        similar: [],
        resultErr: null,
        similarErr: null,
        loading: true
    });

    const getData = useCallback( async () => {
        
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