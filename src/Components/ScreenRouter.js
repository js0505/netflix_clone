import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
// BrowserRouter 라는 이름 대신에 다양한 이름으로 태그 하기위해서 as로 불러온 것?
// -> Router 만 BrowserRouter를 대신 이름을 쓴거고 나머지는 다 따로 불러온 것.

import HomeScreen from '../Routes/HomeScreen'
import TvScreen from '../Routes/TVScreen'
import SearchScreen from '../Routes/SearchScreen';
import Header from './Header';
import DetailScreen from '../Routes/DetailScreen'


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
                    <Route path='/' exact component={HomeScreen} />
                    <Route path='/tv' exact component={TvScreen} />
                    <Route path='/search' exact component={SearchScreen} />
                    {/* Link 컴포넌트 에서 보낸 주소값에 id가 입력되어 하단 컴포넌트로 전송. */}
                    <Route path='/movie/:id' exact component={DetailScreen} />
                    <Route path='/tv/:id' exact component={DetailScreen}/>
                    {/* 외에 정의되지 않은 페이지로 요청 시 루트로 리다이렉트 */}
                    <Redirect from={'*'} to={"/"} />
                </Switch>
            </>
        </Router>
    );
};

export default ScreenRouter;