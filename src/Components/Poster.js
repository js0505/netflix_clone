import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import EmptyPoster from '../assets/empty-image.png'

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    height: 180px;
    border-radius: 3px;
    background-position: center;
    background-image: url(${(props) => props.bgurl});
    background-size: cover;
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
    position: relative;
    margin-bottom: 7px;
    //& 과 :hover 를 띄어쓰기 하면 동작하지 않는다.
    &:hover {
        ${Rating} {
            opacity: 1;
        }
        ${Image} {
            opacity: 0.3;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Release = styled(Moment)`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({id, poster, rating, title, release, isMovie = false}) => {
    return (
        <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
            <Container>
            <ImageContainer>
                    <Image bgurl={poster === null
                        ? EmptyPoster
                        : `https://image.tmdb.org/t/p/w500${poster}`} />
                <Rating>⭐️{rating}/10</Rating>
            </ImageContainer>
            <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
            <Release format={'YYYY.MM.DD'}>{release}</Release>
            </Container>
        </Link>
        
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release: PropTypes.string,
    isMovie: PropTypes.bool
};

export default Poster;