import className from 'classnames/bind';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';

import style from './App.module.scss';
import '~/global_styles/globalFonts.scss';
import '~/global_styles/format_styles.css';

import '~/global_styles/colors.scss';

import 'antd/dist/antd.css';
import Create from '~/pages/auth/create';

const cx = className.bind(style);

function App() {
    return (
        <div>
            <nav>
                <Link to={'/create'}>회원가입하기</Link>
            </nav>
            <Routes>
                <Route path={'/create'} element={<Create />} />
                {/*<div className="App">*/}
                {/*<header className="App-header">*/}
                {/*    <img*/}
                {/*        src={'/assets/images/jeju-island.jpg'}*/}
                {/*        alt="sample-image"*/}
                {/*    />*/}
                {/*    <p className={cx('widget')}>테스트(widget)</p>*/}
                {/*    <p className={cx('callout')}>테스트(Callout1)</p>*/}
                {/*</header>*/}
                {/*</div>*/}
            </Routes>
        </div>
    );
}

export default App;
