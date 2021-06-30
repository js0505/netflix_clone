import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
// BrowserRouter 라는 이름 대신에 다양한 이름으로 태그 하기위해서 as로 불러온 것?
import Home from '../Routes/Home';
import Tv from '../Routes/Tv';
import Search from '../Routes/Search';
import Header from './Header';


const ScreenRouter = () => {
    return (
        // 최상단에 라우터로 감싸줘야 내부 컴포넌트 에서 react-router-dom 기능을 사용할 수 있다.
        <Router>
            <Header />
            <>
                <Switch>
                    {/* Route 속성 설명
                    exact : 중복 되지않고 하나만 존재 해야할 때
                    component : 컴포넌트
                    path : 라우터 주소 */}
                    <Route path='/' exact component={Home} />
                    <Route path='/tv' exact component={Tv} />
                    <Route path='/search' exact component={Search} />
                    {/* 외에 정의되지 않은 페이지로 요청 시 루트로 리다이렉트 */}
                    <Redirect from={'*'} to={"/"} />
                </Switch>
            </>
        </Router>
    );
};

export default ScreenRouter;