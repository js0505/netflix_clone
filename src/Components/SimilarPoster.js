import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import EmptyPoster from '../assets/empty-image.png'

const Container = styled.div`
    font-size: 12px;
`;

const Image = styled.div`
    /* width: 125px; */
    height: 180px;
    border-radius: 3px;
    background-position: center;
    background-image: url(${(props) => props.bgurl});
    background-size: cover;
    transition: opacity 0.1s linear;
    opacity: 0.8;
`;

const ImageContainer = styled.div`
    position: relative;
    margin-bottom: 7px;
    //& 과 :hover 를 띄어쓰기 하면 동작하지 않는다.
    &:hover {
        ${Image} {
            opacity: 1;
        }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const SimilarPoster = ({id, poster, title, isMovie = false}) => {
    return (
        <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
            <Container>
            <ImageContainer>
                    <Image bgurl={poster === null
                        ? EmptyPoster
                        : `https://image.tmdb.org/t/p/w500${poster}`} />
            </ImageContainer>
            <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
            </Container>
        </Link>
        
    );
};

SimilarPoster.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    isMovie: PropTypes.bool
};

export default SimilarPoster;