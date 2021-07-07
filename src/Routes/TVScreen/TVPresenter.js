import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';

const Container = styled.div`
    padding: 0 20px;
`;

const TVPresenter = ({ airingToday, onTheAir, topRated, loading }) => {
    return (
        loading
            ? <Loader />
            : (
                <Container>

                    {airingToday && airingToday.length > 0 && (
                        <Section title={'Airing Today'}>
                            {airingToday.map(tv => (
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    rating={tv.vote_average}
                                    poster={tv.poster_path}
                                    release={tv.first_air_date}
                                />
                            ))}
                        </Section>
                    )}

                    {onTheAir && onTheAir.length > 0 && (
                        <Section title={'Airing Today'}>
                            {onTheAir.map(tv => (
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    rating={tv.vote_average}
                                    poster={tv.poster_path}
                                    release={tv.first_air_date}
                                />
                            ))}
                        </Section>
                    )}

                    {topRated && topRated.length > 0 && (
                        <Section title={'Airing Today'}>
                            {topRated.map(tv => (
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.name}
                                    rating={tv.vote_average}
                                    poster={tv.poster_path}
                                    release={tv.first_air_date}
                                />
                            ))}
                        </Section>
                    )}
                </Container>
            )
    );
};

TVPresenter.propTypes = {
    airingToday: PropTypes.array.isRequired,
    onTheAir: PropTypes.array.isRequired,
    topRated: PropTypes.array.isRequired,
    loading: PropTypes.bool
};

export default TVPresenter;