import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar';
import Home from './components/home';
import Players from './components/players';
import Teams from './components/teams';
import Games from './components/games';
import TradeComparison from './components/trade-comparison';

// temporary for use with JSON files
import players from './data/players_list_averages.json';
import teams from './data/teams_list.json';
import games from './data/games_list.json';

const App = () => {
    return(
        <div className='container-fluid'>
            <NavBar />
            <h1  className='display-4'>NBA Fantasy</h1>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/players' element={<Players playerData={players} />} />
                <Route path='/teams' element={<Teams teamData={teams} />} />
                <Route path='/games' element={<Games gameData={games} />} />
                <Route path='/trade' element={<TradeComparison playerData={players} />} />
            </Routes>
        </div>
    );
};

export default App;