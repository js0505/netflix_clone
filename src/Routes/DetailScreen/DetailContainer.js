import React, {useState, useEffect, useCallback} from 'react';
import { useParams } from 'react-router-dom'
import { movieAPI } from '../../API'

const DetailContainer = () => {
    
    const { id } = useParams();
    
    const [data, setData] = useState({
        detail: {},
        detailErr: null,
        loading: true
    });


    const getDetail = useCallback (async () => {
        // movie의 detail 만 받아오고 있어서
        // tv에서 상세페이지를 들어가면 movie의 데이터로 id값이 들어감.
        const [detail, detailErr] = await movieAPI.movieDetail(id);
        setData({
            detail,
            detailErr,
            loading: false
        })
    }, [id])


    useEffect(() => {
        getDetail();
    },[getDetail, id])

    return (
        <div>
            <h1>{data.detail.title}</h1>
        </div>
    );
};

export default DetailContainer;