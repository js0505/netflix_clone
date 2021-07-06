import React from 'react';

const TVPresenter = ({airingToday, onTheAir, topRated}) => {
    return (
        <div>
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
        </div>
    );
};

export default TVPresenter;