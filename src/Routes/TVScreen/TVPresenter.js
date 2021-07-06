// import React from 'react';

// const TVPresenter = ({airingToday, onTheAir, topRated}) => {
//     return (
        
//     );
// };

// export default TVPresenter;

import React from 'react';
import PropTypes from 'prop-types';

const TVPresenter = ({airingToday, onTheAir, topRated, loading}) => {
    return (
        <div>
            {loading
                ? (
                    <div>
                        <h1>Loading</h1>
                    </div>
                )
                : (
                    <>
                        <div>
                            {airingToday.map(item => (
                                <div key={item.id}>
                                    <h1>{item.name}</h1>
                                </div>
                            ))}
                        </div>
                        <div>
                            {onTheAir.map(item => (
                                <div key={item.id}>
                                    <p>{item.overview}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            {topRated.map(item => (
                                <div key={item.id}>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
        </div>
    );
};

TVPresenter.propTypes = {
    airingToday: PropTypes.array,
    onTheAir: PropTypes.array,
    topRated: PropTypes.array,
    loading: PropTypes.bool.isRequired
};

export default TVPresenter;