import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

import EmptyPoster from '../assets/empty-image.png'

const Container = styled.div`
`;

const Img = styled.div`
    height: 180px;
    border-radius: 5px;
    background-size: cover;
    background-position: center;
    background-image: url(${(props) => props.bgurl});
    opacity: 1;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const ImageContainer = styled.div`
    margin-bottom: 7px;
    position: relative;
    &:hover {
        ${Rating} {
            opacity: 1;
        }
        ${Img} {
            opacity: 0.3;
        }
    }
`;

const Title = styled.span`
    margin-bottom: 3px;
    display: block;
    font-size: 12px;
`;

const Release = styled(Moment)`
    font-size: 10px;
`;


const Poster = ({id, title, poster, rating, release, isMovie = false}) => {
    return (
        <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
            <Container>
            <ImageContainer>
                    <Img bgurl={
                        (poster === null)
                            ? (EmptyPoster)
                            : (`https://image.tmdb.org/t/p/w500${poster}`)} />
                <Rating>⭐️{rating}/10</Rating>
            </ImageContainer>
            <Title>{
                title.length > 18
                    ? `${title.substring(0, 18)}...` 
                    : title
            }</Title>
            <Release format={'YY년 MM월 YY일'}>{release}</Release>
        </Container>
        </Link>
        
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
    rating: PropTypes.string,
    release: PropTypes.string
};

export default Poster;