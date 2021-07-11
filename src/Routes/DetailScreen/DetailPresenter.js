import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader'
import styled from 'styled-components';
import Moment from 'react-moment';
import { Helmet } from 'react-helmet';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;

const BackDrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.bgImg});
    background-position: center;
    background-size: cover;
    filter: blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 100%;
`;

const Cover = styled.div`
    width: 30%;
    background-position: center;
    background-size: cover;
    height: 100%;
    border-radius: 10px;
    margin-left: 30px;
    background-image: url(${(props) => props.bgImg});
`;

const Data = styled.div`
    width: 70%;
    margin-left: 50px;
`;

const Title = styled.h3`
    font-size: 32px;
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;

const Item = styled(Moment)`
    font-size: 16px;
`;

const Genre = styled.span`
    font-size: 16px;
`;

const Divider = styled.span`
    margin: 0 10px;
`;

const Overview = styled.p`
    font-size: 15px;
    opacity: 0.7;
    line-height: 1.5;
    width: 50%;
`;

const DetailPresenter = ({loading, result, similar ,error}) => {
    return (
        <>
            <Helmet>
                <title>
                    {result.title || result.name}
                </title>
            </Helmet>
            {
                loading
            ? <Loader />
            : (
                <Container>
                    <BackDrop bgImg={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}/>
                    <Content>
                        <Cover bgImg={`https://image.tmdb.org/t/p/w500${result.poster_path}`}/>
                        <Data>
                            <Title>{result.title || result.name}</Title>
                            <ItemContainer>
                                <span>출시일 : </span>
                                <Item format={'YY.MM.DD'}>
                                    {result.release_date || result.first_air_date}
                                </Item>
                                <Divider>•</Divider>
                                <span>장르 : </span>
                                <Genre>
                                    {result.genres.map((genre, index) => (
                                        index === result.genres.length - 1
                                            ? genre.name
                                            : `${genre.name} / `
                                    ))}
                                </Genre>
                            </ItemContainer>
                            <Overview>{result.overview}</Overview>
                            {/* <span>Similar Program</span>
                            <div>{similar.map(item => 
                                <h1>{item.name || item.title}</h1>
                            )}</div> */}
                        </Data>
                    </Content>
                </Container>
            )
            }
        </>
        
        
    );
};

DetailPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    result: PropTypes.object,
    error: PropTypes.string
};

export default DetailPresenter;