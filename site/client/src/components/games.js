import React from 'react';

import GameList from './game-list';

const Games = ({ gameData }) => {
    return (
        <div id='games-div'>
            <h2 className='display-5'>Games</h2>
            <GameList gameData={gameData}/>
        </div>
    );
};

export default Games;