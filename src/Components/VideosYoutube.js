import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import YouTube from 'react-youtube';

const Container = styled.div`

`;

const SYoutube = styled(YouTube)`
    margin-right: 25px;
    ${({ theme }) => theme.mobile`
        margin-right: 10px;
    `};
`;


const VideosYoutube = ({id}) => {
    
    const opts = {
    height: '150',
    width: '250',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
    },
    };


    return (
        <Container>
            <SYoutube videoId={id} opts={ opts }/>
        </Container>
    );
};

VideosYoutube.propTypes = {
    key: PropTypes.string.isRequired
};

export default VideosYoutube;