// import React from 'react';

// const HomePresenter = ({nowPlaying, topRated, upComing}) => {
//     return (
        
//     );
// };

// export default HomePresenter;


import React from 'react';
import PropTypes from 'prop-types';


//로딩 프로퍼티 추가
const HomePresenter = ({nowPlaying, topRated, upComing, loading}) => {
    return (
        <div>
            {loading 
                ? (
                    <div>
                        <h1>Loading</h1>
                    </div>
                ) : (
                    <>
                    <div>
                        {nowPlaying.map(item => (
                            <div key={item.id}>
                                <h1>{item.title}</h1>    
                            </div>
                        ))}
                    </div>

                    <div>
                        {topRated.map(item => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    
                    <div>
                        {upComing.map(item => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                            </div>
                        ))}
                    </div>
                    </>
                )
            }
            
        </div>
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