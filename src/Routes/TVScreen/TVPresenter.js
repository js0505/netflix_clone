import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Loader from '../../Components/Loader'
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const Container = styled.div`

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