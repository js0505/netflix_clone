import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
    display: flex;
`;

const Item = styled.li`
    width: 100px;
    height: 50px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 5px solid
        ${(props) => (props.current ? 'red' : 'transparent')};
    transition: border-bottom 0.5s ease-in-out;
`;


//컴포넌트에 스타일링 할때는 괄호안에 넣어서.
const SLink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Header = () => {

    // react-router-dom의 hook 을 이용하여
    // withRouter 대신 이용해보기.

    const {pathname} = useLocation();

    return (
        <Container>
            <List>
                <Item current={pathname === '/'}>
                    <SLink to="/">Movies</SLink>
                </Item>
                <Item current={pathname ==='/tv'}>
                    <SLink to="/tv">Tv</SLink>
                </Item>
                <Item current={pathname ==='/search'}>
                    <SLink to="/search">Search</SLink>
                </Item>
            </List>
        </Container>
    );
};

export default Header;