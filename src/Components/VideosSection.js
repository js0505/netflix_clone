import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
    margin-left: 30px;
    margin-bottom: 40px;
    ${({ theme }) => theme.tablet`

    `};
    ${({ theme }) => theme.mobile`
        margin-left: 0;
    `};
`;

const Title = styled.div`
    font-size: 23px;
    font-weight: 600;
`;

const Children = styled.div`
    margin-top: 25px;
    display: flex;
    overflow: scroll;
`;


const VideosSection = ({ title, children }) => {
    
    return (
        <Container>
            <Title>{title}</Title>
            <Children>{children}</Children>
        </Container>
    );
};

VideosSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType(
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    )
};

export default VideosSection;