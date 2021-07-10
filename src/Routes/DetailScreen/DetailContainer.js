import React, {useState, useEffect, useCallback} from 'react';
import { useLocation, useParams } from 'react-router-dom'
import { movieAPI, tvAPI } from '../../API'

const DetailContainer = () => {
    
    const { id } = useParams();

    const {pathname} = useLocation();
    
    const [data, setData] = useState({
        detail: {},
        detailErr: null,
        loading: true
    });


    const getDetail = useCallback (async () => {
        
        if (pathname === `/movie/${id}`) {
            const [detail, detailErr] = await movieAPI.movieDetail(id);

            setData({
                detail,
                detailErr,
                loading: false
            })

        } else {
            const [detail, detailErr] = await tvAPI.tvDetail(id);

            setData({
                detail,
                detailErr,
                loading: false
            })

        }
    }, [id, pathname])


    useEffect(() => {
        getDetail();
    }, [getDetail, id])
    

    return (
        <div>
            <h1>{ data.detail.title || data.detail.name }</h1>
        </div>
    );
};

export default DetailContainer;