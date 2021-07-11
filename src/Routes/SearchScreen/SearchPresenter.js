import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.div`
    padding: 0 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;


const SearchPresenter = ({movies, tvs, keyword, onChange, onSubmit, loading, err}) => {
    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <Input
                    placeholder={"Movie and TV Search"}
                    value={keyword}
                    onChange={onChange}
                />
            </Form>
        </Container>
    );
};

// SearchPresenter.propTypes = {
//     movies: PropTypes.array,
//     tvs: PropTypes.array,
//     keyword: PropTypes.string,
//     onChange: PropTypes.func,
//     onSubmit: PropTypes.func,
//     loading: PropTypes.bool.isRequired,
//     err: PropTypes.string
// };

export default SearchPresenter;