import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 40px;
    margin-left: 30px;
`;

const Grid = styled.div`
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 125px);
    grid-gap: 25px;
`;

const Title = styled.span`
    font-size: 30px;
    font-weight: 600;
`;


const Section = ({title, children}) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Grid>{children}</Grid>
        </Container>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Section;