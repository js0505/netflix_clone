import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
import {movieAPI} from '../../API'

const DetailContainer = () => {
    
    const { id } = useParams();
    
    const [data, setData] = useState({
        detail: {},
        detailErr: null,
        loading: true
    });


    const getDetail = async () => {
        const [detail, detailErr] = await movieAPI.movieDetail(id);
        setData({
            detail,
            detailErr,
            loading: false
        })
    }


    useEffect(() => {
        getDetail();
    })

    return (
        <div>
            <h1>{data.detail.title}</h1>
        </div>
    );
};

export default DetailContainer;