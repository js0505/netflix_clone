import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Poster from '../../Components/Poster';
import Section from '../../Components/Section';
import Loader from '../../Components/Loader';

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
                <Section title={'Airing Today'}>
                    {airingToday.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            poster={item.poster_path}
                            rating={item.vote_average}
                            release={item.first_air_date}/>
                ))}        
                </Section>
                    
                <Section title={'On The Air'}>
                    {onTheAir.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            poster={item.poster_path}
                            rating={item.vote_average}
                            release={item.first_air_date}/>
                ))}        
                </Section>
                
                <Section title={'Top Rated'}>
                    {topRated.map(item => (
                        <Poster
                            key={item.id}
                            id={item.id}
                            title={item.name}
                            poster={item.poster_path}
                            rating={item.vote_average}
                            release={item.first_air_date}/>
                ))}        
                </Section>
            </Container>
        )
    );
};

TVPresenter.propTypes = {
    airingToday: PropTypes.array,
    onTheAir: PropTypes.array,
    topRated: PropTypes.array,
    loading: PropTypes.bool
};

export default TVPresenter;