import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Menu = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 100px;
    height: 50px;
    text-align: center;
    transition: border-bottom 0.2s ease-in-out;
    border-bottom: 5px solid
        ${(props) => (
            props.current
                ? 'red'
                : 'transparent'
        )};
`;

const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
`;

const Header = () => {

    const { pathname } = useLocation();

    
    return (
        <Container>
            <Menu>
                <Item current={pathname.includes('/movie')}>
                    <SLink to='/movie'>Movies</SLink>
                </Item>
                <Item current={pathname.includes('/tv')}>
                    <SLink to='/tv'>TV</SLink>
                </Item>
                <Item current={pathname.includes('/search')}>
                    <SLink to='/search'>Search</SLink>
                </Item>
            </Menu>
        </Container>
    );
};

export default Header;