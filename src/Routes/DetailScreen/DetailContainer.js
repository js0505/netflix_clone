import React, {useState, useEffect, useCallback} from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { movieAPI, tvAPI } from '../../API'
import DetailPresenter from './DetailPresenter';

const DetailContainer = () => {
    
    const { id } = useParams();

    const location = useLocation();
    
    const [data, setData] = useState({
        result: {},
        resultErr: null,
        loading: true
    });

    const getData = useCallback( async () => {
        
        const [result, resultErr] = location.pathname.includes('/movie/')
            ? await movieAPI.movieDetail(id)
            : await tvAPI.tvDetail(id)
        
        setData({
            result,
            resultErr,
            loading: false
        })
    },[id, location])

    useEffect(() => {
        getData()
    }, [getData])


    // const getDetail = useCallback (async () => {
        
    //     if (pathname === `/movie/${id}`) {
    //         const [detail, detailErr] = await movieAPI.movieDetail(id);

    //         setData({
    //             detail,
    //             detailErr,
    //             loading: false
    //         })

    //     } else {
    //         const [detail, detailErr] = await tvAPI.tvDetail(id);

    //         setData({
    //             detail,
    //             detailErr,
    //             loading: false
    //         })

    //     }
    // }, [id, pathname])


    // useEffect(() => {
    //     getDetail();
    // }, [getDetail, id])
    

    return (
        <DetailPresenter {...data} />
    );
};

export default DetailContainer;