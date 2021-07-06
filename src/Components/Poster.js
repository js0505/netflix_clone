import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const Release = styled(Moment)`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
`;


const Poster = ({ id, title, rating, release, poster }) => {

    return (
        <Container>
            <ImageContainer>
                <Image
                    bgurl={
                        poster
                            ? `https://image.tmdb.org/t/p/w500${poster}`
                            : require('../assets/empty-image.jpg')
                    }
                />
                <Rating>
                    <span role='img' aria-label='vote'>⭐️</span>
                    {rating} / 10
                </Rating>
            </ImageContainer>
            <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
            <Release format={'MM월 DD일 YYYY년'}>{release}</Release>
        </Container>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    release: PropTypes.string,
    poster: PropTypes.string
};

export default Poster;