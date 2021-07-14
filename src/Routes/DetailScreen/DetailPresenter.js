import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader'

import styled, { ThemeProvider } from 'styled-components';
import media from '../../Css/Media';
import theme from '../../Css/Theme'

import Moment from 'react-moment';
import { Helmet } from 'react-helmet';
import SimilarSection from '../../Components/SimilarSection';
import SimilarPoster from '../../Components/SimilarPoster';

import VideosSection from '../../Components/VideosSection';
import VideosYoutube from '../../Components/VideosYoutube';



const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 100px 50px 0 50px;
    ${({ theme }) => theme.tablet`
        height: 100%;
        display: flex;
        flex-direction: column;
    `};
    ${({ theme }) => theme.mobile`
        padding: 0 25px;
        padding-top: 70px;
    `};
`;

const BackDrop = styled.div`
    position: absolute;
    top: 5%;
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
    ${({ theme }) => theme.tablet`
        margin-bottom: 80px;
    `};
    ${({ theme }) => theme.mobile`
        flex-direction: column;
        justify-content: space-between;
    `};
`;

const Cover = styled.div`
    width: 30%;
    height: 100%;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    margin-left: 30px;
    background-image: url(${(props) => props.bgImg});
    ${({ theme }) => theme.tablet`
        width: 170px;
        margin-left: 0;
        margin: 0 auto;
        height: 250px;
        background-size: cover;
    `};

    ${({ theme }) => theme.mobile`
        width: 125px;
        margin-left: 0;
        margin: 0 auto;
        height: 180px;
        background-size: 100%;
    `};
    
`;

const Data = styled.div`
    width: 70%;
    margin-left: 50px;
    ${({ theme }) => theme.mobile`
        margin-left: 0;
        width: 100%;
    `};
`;

const Title = styled.h3`
    font-size: 32px;
    ${({ theme }) => theme.mobile`
        margin-top: 10px;
        font-size: 22px;    
        width: 100%;
    `};
`;

const ItemContainer = styled.div`
    margin: 20px 0;
`;
const Release = styled.span`
    ${({ theme }) => theme.tablet`
        display: block;
        margin-bottom: 8px;
    `};
`;

const Item = styled(Moment)`
    font-size: 14px;
`;

const Genre = styled.span`
    font-size: 14px;
`;

const Divider = styled.span`
    margin: 0 10px;
    ${({ theme }) => theme.tablet`
        display: none;
    `};
`;

const Overview = styled.p`
    font-size: 15px;
    opacity: 0.7;
    line-height: 1.5;
    width: 100%;
    margin-bottom: 80px;
    ${({ theme }) => theme.tablet`
        margin-bottom: 0px;
    `};
    ${({ theme }) => theme.mobile`
        font-size: 13px;
        width: 100%;
        margin-bottom: 30px;
    `};
`;

const VideoSimilarContainer = styled.div`
    position: absolute;
    top: 55%;
    left: 35%;
    width: 60%;
    overflow: scroll;
    z-index: 1;
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.tablet`
        width: 100%;
        top: 90%;
        left: 5%;
    `};
`;

const DetailPresenter = ({ loading, result, similar, error, location, videos }) => {
    
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
                <ThemeProvider theme={{ ...theme, ...media }}>
                    <BackDrop bgImg={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`}/>
                    <Container>
                        <Content>
                            <Cover bgImg={`https://image.tmdb.org/t/p/w500${result.poster_path}`}/>
                            <Data>
                                <Title>{result.title || result.name}</Title>
                                <ItemContainer>
                                    <Release>
                                        <span>Release : </span>
                                        <Item format={'YYYY / MM / DD'}> 
                                            {result.release_date || result.first_air_date}
                                        </Item>
                                    </Release>
                                    <Divider>•</Divider>
                                    <span>Genre : </span>
                                    <Genre>
                                        {/* 인덱스는 0부터 시작. 장르값이 1개면 그대로 작성하고 
                                            2개 이상이면 장르명 오른쪽에 / 으로 각각 나눠서 작성. */}
                                        {result.genres.map((genre, index) => (
                                            index === result.genres.length - 1
                                                ? genre.name
                                                : `${genre.name} / `
                                        ))}
                                    </Genre>
                                </ItemContainer>
                                <Overview>
                                    {result.overview === ''
                                        ? 'No Overview'
                                        :  result.overview
                                    }
                                </Overview>
                            </Data>
                        </Content>
                        <VideoSimilarContainer>
                            {videos.length === 0
                                    ? (<VideosSection title={'No Trailer'}/>)
                                : (
                                    <>
                                        <VideosSection title={'Trailer'}>
                                            {videos.map(item => (
                                                <VideosYoutube id={item.key}/>
                                            ))}    
                                        </VideosSection>
                                    </>
                                )
                            }

                            {similar.length === 0
                                ? ( <SimilarSection title={'No Similar Programs'} />)
                                : (
                                <>
                                    <SimilarSection title={'Similar Programs'}>
                                        {similar.map(item => (
                                            <SimilarPoster
                                                key={item.id}
                                                id={item.id}
                                                poster={item.poster_path}
                                                title={item.name || item.title}
                                                rating={item.vote_average}
                                                release={item.first_air_date}
                                                //주소값을 검사해서 similarposter의 Link값 설정.
                                                isMovie={location.pathname.includes('/movie/')}
                                            />
                                        ))}
                                    </SimilarSection>
                                </>
                                )
                            }
                                </VideoSimilarContainer>
                    </Container>
                </ThemeProvider>
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