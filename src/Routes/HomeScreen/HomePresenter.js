// import React from 'react';

// const HomePresenter = ({nowPlaying, topRated, upComing}) => {
//     return (
        
//     );
// };

// export default HomePresenter;


import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';
import styled from 'styled-components';

import Section from '../../Components/Section';

const Container = styled.div`
    padding: 0 20px;
`;

//로딩 프로퍼티 추가
const HomePresenter = ({nowPlaying, topRated, upComing, loading}) => {
    return (
        loading 
            ? (
                <Loader />
            ) : (
                <Container>

                    {/* {nowPlaying.map(item => (
                        <div key={item.id}>
                            <h1>{item.title}</h1>    
                        </div>
                    ))} */}

                    {nowPlaying && nowPlaying.length > 0 && (
                        <Section title={"Now Playing"}>
                            {nowPlaying.map(movie => (
                                <h1 key={movie.id}>{movie.title}</h1>
                            ))}
                        </Section>
                    )}

                    {/* {topRated.map(item => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                        </div>
                    ))} */}

                    {topRated && topRated.length > 0 && (
                        <Section title={'Top Rated'}>
                            {topRated.map(movie => (
                                <span key={movie.id}>{movie.title}</span>
                            ))}
                        </Section>
                    )}

                    {/* {upComing.map(item => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                        </div>
                    ))} */}

                    {upComing && upComing.length > 0 && (
                        <Section title={'UpComing'}>
                            {upComing.map(movie => (
                                <span key={movie.id}>{movie.title}</span>
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