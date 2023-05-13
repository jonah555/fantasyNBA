import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar';
import Players from './components/players';
import Teams from './components/teams';
import Games from './components/games';

// temporary for use with JSON files
import players from './data/players_list.json';
import teams from './data/teams_list.json';
import games from './data/games_list.json';

const App = () => {
    return(
        <div className='container-fluid'>
            <NavBar />
            <h1  className='display-4'>NBA Fantasy</h1>
            <Routes>
                <Route exact path='/'></Route>
                <Route path='/players' element={<Players playerData={players} />} />
                <Route path='/teams' element={<Teams teamData={teams} />} />
                <Route path='/games' element={<Games gameData={games} />} />
            </Routes>
        </div>
    );
};

export default App;