import React from 'react';

import TeamList from './team-list';

const Teams = ({ teamData }) => {
    return (
        <div id='teams-div'>
            <h2>Teams</h2>
            <TeamList teamData={teamData}/>
        </div>
    );
};

export default Teams;