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

const TVPresenter = ({airingToday, onTheAir, topRated, loading}) => {
    return (
        <>
            <Helmet>
                <title>TVs | Netflix Clone</title>
            </Helmet>
            {
                loading
            ? (
                <Loader />
            ) : (
                <ThemeProvider theme={{ ...theme, ...media}}>
                <Container>
                    <Section title={'Airing Today'}>
                        {airingToday.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                poster={item.poster_path}
                                rating={item.vote_average}
                                title={item.name}
                                release={item.first_air_date}
                            />
                        ))}
                    </Section>

                    <Section title={'On The Air'}>
                        {onTheAir.map(item => (
                            <Poster
                                key={item.id}
                                id={item.id}
                                poster={item.poster_path}
                                rating={item.vote_average}
                                title={item.name}
                                release={item.first_air_date}
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
                                title={item.name}
                                release={item.first_air_date}
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

TVPresenter.propTypes = {
    airingToday: PropTypes.array,
    onTheAir: PropTypes.array,
    topRated: PropTypes.array,
    loading: PropTypes.bool
};

export default TVPresenter;