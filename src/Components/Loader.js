import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 32px;
    margin-top: 50px;
`;

// Screen 컴포넌트의 container에서 데이터가 다 들어오기 전에 표시하는 로딩 페이지.

const Loader = () => {
    return (
        <Container>
            <span role='img' aria-label='Loading'>😄</span>
        </Container>
    );
};

export default Loader;