import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Emoji = styled.span`
    font-size: 200px;
`;

const Loader = () => {
    return (
        <Container>
            <Emoji>🤩</Emoji>
        </Container>
    );
};

export default Loader;