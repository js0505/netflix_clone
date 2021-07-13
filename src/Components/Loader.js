import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: 50px;
    margin-top: 50px;
    padding-top: 200px;
`;


const Loader = () => {
    return (
        <Container>
            <span role='img' aria-label='Loading'>😄 Loading 😄</span>
        </Container>
    );
};

export default Loader;