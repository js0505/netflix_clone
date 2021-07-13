import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import styled, { ThemeProvider } from 'styled-components';
import media from '../../Css/Media';
import theme from '../../Css/Theme'


import Loader from '../../Components/Loader'
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding-top: 100px;
`;

const HomePresenter = ({ nowPlaying, topRated, upComing, loading }) => {
    return (
        <>
            <Helmet>
                <title>Movies | Neflix Clone</title>
            </Helmet>
            {
                loading
            ? (
                <Loader />
            ) : (
                <ThemeProvider theme={{ ...theme, ...media}}>
                <Container>
                    <Section title={'Now Playing'}>
                        {nowPlaying.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                poster={item.poster_path}
                                rating={item.vote_average}
                                title={item.title}
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
                                poster={item.poster_path}
                                rating={item.vote_average}
                                title={item.title}
                                release={item.release_date}
                                isMovie={true}
                            />
                        ))}
                    </Section>

                    <Section title={'Upcoming'}>
                        {upComing.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                poster={item.poster_path}
                                rating={item.vote_average}
                                title={item.title}
                                release={item.release_date}
                                isMovie={true}
                            />
                        ))}
                    </Section>
                </Container>
                </ThemeProvider>
            )
            }
        </>
        
    );
};

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    topRated: PropTypes.array,
    upComing: PropTypes.array,
    loading: PropTypes.bool
};

export default HomePresenter;