import React, { Component } from 'react';

import Game from './game';

class GameList extends Component{
    // constructor(props) {
    //     super(props);
    //     this.printTest = this
    //         .printTest
    //         .bind(this);
    // }

    state = {
        focusedCard: false
    };

    toggleCard = () => {
        this.setState({
            focusedCard: !this.state.focusedCard
        });
        // alert(this.state.focusedCard);
    };

    printTest = (row) => {
        alert(Object.values(row)[1]);
    };

    render() {
        return(
            <div id='game-list-div'>
                {this.state.focusedCard ? <Game toggle={this.toggleCard} /> : null}
                <table className='table' style={{filter: this.state.focusedCard ? 'blur(5px)' : 'none'}}>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Matchup</th>
                            <th scope='col'>Years</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.gameData.map((row, idx) => {
                            return <tr key={idx} onClick={this.toggleCard}>
                                <td>{Object.values(row)[0]}</td>
                                <td>{Object.values(row)[1].join(' vs. ')}</td>
                                <td>{Object.keys(Object.values(row)[2]).join(', ')}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default GameList;