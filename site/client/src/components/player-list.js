import React from 'react';

const PlayerList = ({ playerData }) => {
    return (
        <div id='player-list-div'>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Years</th>
                    </tr>
                </thead>
                <tbody>
                    {playerData.map((row, idx) => {
                        console.log(row);
                        return <tr key={idx}>
                            <td>{Object.values(row)[0]}</td>
                            <td>{Object.values(row)[1]}</td>
                            <td>{Object.keys(Object.values(row)[2]).join(', ')}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerList;