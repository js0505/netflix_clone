import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import emptyImage from '../assets/empty-image.png'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

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


const Poster = ({ id, title, rating, release, poster, isMovie=false }) => {

    return (

        // 여기서 Movie 페이지 에서만 isMovie = true가 들어오기 때문에
        // Link 컴포넌트는 그 값에 따라서 path를 다르게 부여한다.
        <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
            <Container>
                <ImageContainer>
                    <Image
                        bgurl={
                            //상단에서 그림파일을 import 해서 연결.
                            (poster === null)
                                ? emptyImage
                                : `https://image.tmdb.org/t/p/w500${poster}` 
                        }
                    />
                    <Rating>
                        <span role='img' aria-label='vote'>⭐️</span>
                        {rating} / 10
                    </Rating>
                </ImageContainer>
                {/* substring(start, end) : start와 end 사이 */}
                {/* title의 길이가 18보다 작으면 substring으로 글자를 자르고 뒤에 '...' 표기 
                    아니면 title 그대로 표기. */}
                <Title>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</Title>
                <Release format={'MM월 DD일 YYYY년'}>{release}</Release>
            </Container>
        </Link>
    );
};



Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    release: PropTypes.string,
    poster: PropTypes.string,
    isMovie: PropTypes.bool
};

export default Poster;