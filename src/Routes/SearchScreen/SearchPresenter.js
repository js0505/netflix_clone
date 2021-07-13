import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import styled, { ThemeProvider } from 'styled-components';
import media from '../../Css/Media';
import theme from '../../Css/Theme'

import Loader from '../../Components/Loader';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';



const Container = styled.div`
    padding: 0 20px;
    padding-top: 100px;
    ${({ theme }) => theme.mobile`
        padding: 100px 10px 0 10px;
    `};
`;

const Form = styled.form`
    text-align: center;
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
        <ThemeProvider theme={{ ...theme, ...media}}>
        <Container>
            <Helmet>
                <title>Search | Netflix Clone</title>
            </Helmet>
            <Form onSubmit={onSubmit}>
                <Input
                    placeholder={"Search Movie and TV Show"}
                    value={keyword}
                    onChange={onChange}
                />
            </Form>
            {
                loading
                ? <Loader />
                : (
                    <>
                        {movies && movies.length > 0 && (
                            <Section title={"Movie Results"}>
                                {movies.map(movie => (
                                    <Poster
                                        key={movie.id}
                                        id={movie.id}
                                        poster={movie.poster_path}
                                        title={movie.title}
                                        rating={movie.vote_average}
                                        release={movie.release_date}
                                        isMovie={true}
                                    />
                                ))}
                            </Section>
                        )}

                        {tvs && tvs.length > 0 && (
                            <Section title={'TV Results'}>
                                {tvs.map(tv => (
                                    <Poster
                                        key={tv.id}
                                        id={tv.id}
                                        poster={tv.poster_path}
                                        title={tv.name}
                                        rating={tv.vote_average}
                                        release={tv.first_air_date}
                                    />
                                ))}
                            </Section>
                        )}
                    </>
                )
            }
        </Container>
        </ThemeProvider>
    );
};

SearchPresenter.propTypes = {
    movies: PropTypes.array,
    tvs: PropTypes.array,
    keyword: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    loading: PropTypes.bool.isRequired,
    err: PropTypes.string
};

export default SearchPresenter;