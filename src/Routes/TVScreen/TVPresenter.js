import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';
import styled from 'styled-components';

import Poster from '../../Components/Poster';
import Section from '../../Components/Section';

const Container = styled.div`
    padding: 0 20px;
`;

const TVPresenter = ({airingToday, onTheAir, topRated, loading}) => {
    return (
            loading
                ? (
                    <Loader />
                ) : (
                    <Container>
                    
                        {airingToday && airingToday.length > 0 && (
                            <Section title={'Airing Today'}>
                            {airingToday.map(item => (
                                    <Poster
                                        key={item.id}
                                        id={item.id}
                                        title={item.name}
                                        rating={item.vote_average}
                                        release={item.first_air_date}
                                        poster={item.poster_path}
                                    />
                                ))}
                            </Section>
                        )}
                
                    
                        {onTheAir && onTheAir.length > 0 && (
                            <Section title={'On The Air'}>
                                {onTheAir.map(item => (
                                    <Poster
                                        key={item.id}
                                        id={item.id}
                                        title={item.name}
                                        rating={item.vote_average}
                                        release={item.first_air_date}
                                        poster={item.poster_path}
                                    />
                                ))}
                            </Section>
                        )}
                
                    
                        {topRated && topRated.length > 0 && (
                            <Section title={'Top Rated'}>
                                {topRated.map(item => (
                                    <Poster
                                        key={item.id}
                                        id={item.id}
                                        title={item.name}
                                        rating={item.vote_average}
                                        release={item.first_air_date}
                                        poster={item.poster_path}
                                    />
                                ))}
                            </Section>
                        )}
                    </Container>
                )
            
    );
};

TVPresenter.propTypes = {
    airingToday: PropTypes.array,
    onTheAir: PropTypes.array,
    topRated: PropTypes.array,
    loading: PropTypes.bool.isRequired
};

export default TVPresenter;