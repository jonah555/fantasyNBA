import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar';
import Players from './components/players';

const App = () => {
    return(
        <div className='container'>
            <NavBar />
            <h1>NBA Fantasy</h1>
            <Routes>
                <Route exact path='/'></Route>
                <Route path='/players' element={<Players />} />
            </Routes>
        </div>
    );
};

export default App;