import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Poster from '../../Components/Poster';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';

const Container = styled.div`
    padding: 0 20px;
`;

const HomePresenter = ({ nowPlaying, topRated, upComing, loading }) => {
    

    return (
        loading
                ? (
                    <Loader />
                )
                : (
                    <Container>
                        <Section title={'Now Playing'}>
                            {nowPlaying.map(item => (
                                <Poster
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    poster={item.poster_path}
                                    rating={item.vote_average}
                                    release={item.release_date}
                                    isMovie={true}
                                />
                            ))}
                        </Section>

                        <Section title={'Top Rated'}>
                            {topRated.map(item => (
                                <Poster
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    poster={item.poster_path}
                                    rating={item.vote_average}
                                    release={item.release_date}
                                />
                            ))}
                        </Section>

                        <Section title={'Upcoming'}>
                            {upComing.map(item => (
                                <Poster
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    poster={item.poster_path}
                                    rating={item.vote_average}
                                    release={item.release_date}
                                />
                            ))}
                        </Section>
                    </Container>
                ) 
    );
};

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    topRated: PropTypes.array,
    upcoming: PropTypes.array,
    loading: PropTypes.bool
};

export default HomePresenter;