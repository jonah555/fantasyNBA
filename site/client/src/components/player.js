import React, { Component } from 'react';

class Player extends Component{
    state = {
        focusedCard: false
    };
    
    closeWindow = () => {
        this.props.toggle();
    };

    render() {
        return(
            <div className='player-card d-flex justify-content-center align-items-center container-fluid' onClick={this.closeWindow} style={{width: '100%', height: '80vh', position: 'fixed', zIndex: 1}}>    
                <div className='card container scroll' onClick={(e) => e.stopPropagation()}>
                    <div className='card-body'>
                        <h5 className='card-title'>{this.props.playerData.name}</h5>
                        <div className='card-data'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>game</th>
                                        <th>game id</th>
                                        {Object.keys(Object.values(this.props.playerData.season['2021']['game log'])[0]).map((header) => {
                                            return (
                                                <th>{header}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(this.props.playerData.season['2021']['game log']).map((row, idx) => {
                                        return (
                                            <tr>
                                                <th>{idx}</th>
                                                <td>{row[0]}</td>
                                                {Object.values(row[1]).map((val) => {
                                                    return (
                                                        <td>{val}</td>
                                                    )
                                                })}
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <button onClick={this.closeWindow}>Close</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Player