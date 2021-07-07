import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EmptyImage from '../assets/empty-image.png'
import Moment from 'react-moment';

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center;
    transition: opacity 0.1s linear;
    background-image: url(${(props) => props.bgurl});
`;

const Rating = styled.span`
    bottom: 10px;
    right: 10px;
    position: absolute;
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
        ${Image} {
            opacity: 0.3;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;


const Poster = ({id, title, rating, poster, release, isMovie = false}) => {
    return (
        <Link to={
            isMovie
            ? `/movie/${id}`
            : `/tv/${id}`
        }>
            <Container>
                <ImageContainer>
                    <Image
                        bgurl={
                            poster === null
                                ? EmptyImage
                                : `https://image.tmdb.org/t/p/w500/${poster}`
                        }>
                    </Image>
                    <Rating role='img' aria-label='vote'>⭐️{rating} / 10</Rating>
                </ImageContainer>
                <Title>{title}</Title>
                <Moment format={'YY년 MM월 DD일'}>{ release }</Moment>
            </Container>
        </Link>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string,
    release: PropTypes.string,
    isMovie: PropTypes.bool
};

export default Poster;