import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../../Components/Loader'
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 0 20px;
`;

const HomePresenter = ({nowPlaying, topRated, upComing, loading}) => {
    return (
            loading
                ? (
                    <Loader />
                ) : (
                <Container>
                    
                    {nowPlaying && nowPlaying.length > 0 && (
                        <Section title={'Now Playing'}>
                            {nowPlaying.map(movie => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    poster={movie.poster_path}
                                    release={movie.release_date}
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
                                    poster={movie.poster_path}
                                    release={movie.release_date}
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
                                    poster={movie.poster_path}
                                    release={movie.release_date}
                                    isMovie={true}
                                />
                            ))}
                        </Section>
                    )}

                </Container>
                )
    );
};

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    topRated: PropTypes.array,
    upComing: PropTypes.array,
    loading: PropTypes.bool
};

export default HomePresenter;