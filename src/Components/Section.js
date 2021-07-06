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

// section 컴포넌트를 사용하는 presenter 컴포넌트에서
// Section 의 props가 title,
// 태그의 내부에 있는 다른 태그가 children의 영향을 받음.

const Section = ({title, children}) => {
    return (
        <Container>
            {/* 섹션의 제목 */}
            <Title>{title}</Title>
            {/* 섹션 밑의 poster들이 담긴 부분 */}
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