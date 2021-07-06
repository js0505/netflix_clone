import React from 'react';

const HomePresenter = ({nowPlaying, topRated, upComing}) => {
    return (
        <div>
            <div>
                {/* 맵 데이터를 입력할 땐 key값을 꼭 지정해야 한다. */}
                {nowPlaying.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>    
                    </div>
                ))}
            </div>

            <br />
            <br />
            
            <div>
                {topRated.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
            <br />
            <br />
            
            <div>
                {upComing.map(item => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePresenter;