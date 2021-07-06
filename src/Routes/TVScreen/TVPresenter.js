// import React from 'react';

// const TVPresenter = ({airingToday, onTheAir, topRated}) => {
//     return (
        
//     );
// };

// export default TVPresenter;

import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';
import styled from 'styled-components';

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
                        {/* <div>
                            {airingToday.map(item => (
                                <div key={item.id}>
                                    <h1>{item.name}</h1>
                                </div>
                            ))}
                        </div> */}
                    
                        {airingToday && airingToday.length > 0 && (
                            <Section title={'Airing Today'}>
                                {airingToday.map(item => (
                                    <h1 key={item.id}>{item.name}</h1>
                                ))}
                            </Section>
                        )}
                    
                        {/* <div>
                            {onTheAir.map(item => (
                                <div key={item.id}>
                                    <p>{item.overview}</p>
                                </div>
                            ))}
                        </div> */}
                    
                        {onTheAir && onTheAir.length > 0 && (
                            <Section title={'On The Air'}>
                                {onTheAir.map(item => (
                                    <span key={item.id}>{item.name}</span>
                                ))}
                            </Section>
                        )}
                    
                        {/* <div>
                            {topRated.map(item => (
                                <div key={item.id}>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div> */}
                    
                        {topRated && topRated.length > 0 && (
                            <Section title={'Top Rated'}>
                                {topRated.map(item => (
                                    <span key={item.id}>{item.name}</span>
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