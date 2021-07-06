import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';
import styled from 'styled-components';

import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 0 20px;
`;

//로딩 프로퍼티 추가
const HomePresenter = ({nowPlaying, topRated, upComing, loading}) => {
    return (
        //state의 loading 부분이 데이터를 받아서 true로 변하면
        // 하단의 페이지 데이터 리턴.
        loading 
            ? (
                <Loader />
            ) : (
                <Container>
                    
                    {nowPlaying && nowPlaying.length > 0 && (
                        <Section title={"Now Playing"}>
                            {nowPlaying.map(movie => (
                                //데이터를 매핑할 때 항상 중복되지 않는 key 값을 props로 넣을 수 있도록!
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    release={movie.release_date}
                                    poster={movie.poster_path}
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}

                    {topRated && topRated.length > 0 && (
                        <Section title={'Top Rated'}>
                            {topRated.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    release={movie.release_date}
                                    poster={movie.poster_path}
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}

                    {upComing && upComing.length > 0 && (
                        <Section title={'UpComing'}>
                            {upComing.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    release={movie.release_date}
                                    poster={movie.poster_path}
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}

                </Container>
            )
    );
};
// typescript 처럼 프로퍼티의 속성을 지정.
HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    topRated: PropTypes.array,
    upComing: PropTypes.array,
    loading: PropTypes.bool.isRequired
};

export default HomePresenter;