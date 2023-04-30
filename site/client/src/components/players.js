import React from 'react';

import PlayerList from './player-list';

const Players = ({ playerData }) => {
    return (
        <div id='players-div'>
            <h2 className='display-5'>Players</h2>
            <PlayerList playerData={playerData}/>
        </div>
    );
};

export default Players;