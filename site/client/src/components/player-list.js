import React, { Component } from 'react';

import Player from './player';

class PlayerList extends Component{
    // constructor(props) {
    //     super(props);
    //     this.printTest = this
    //         .printTest
    //         .bind(this);
    // }

    state = {
        cardIsFocused: false
    };

    selectCard = (e) => {
        // console.log(e);
        let target = e.target.parentNode;
        let playerIdx = target.getAttribute('player-idx');
        this.setState({
            focusedCard: playerIdx
        });
        this.toggleCard();
    }

    toggleCard = () => {
        this.setState({
            cardIsFocused: !this.state.cardIsFocused
        });
        // alert(this.state.cardIsFocused);
    };

    printTest = (row) => {
        alert(Object.values(row)[1]);
    };

    render() {
        return(
            <div id='player-list-div'>
                {this.state.cardIsFocused ? <Player toggle={this.toggleCard} playerIdx={this.state.focusedCard} playerData={this.props.playerData[this.state.focusedCard]} /> : null}
                <table className='table' style={{filter: this.state.cardIsFocused ? 'blur(5px)' : 'none'}}>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Years</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.playerData.map((row, idx) => {
                            return <tr player-idx={idx} key={idx} onClick={(e) => this.selectCard(e)}>
                                <td>{Object.values(row)[0]}</td>
                                <td>{Object.values(row)[1]}</td>
                                <td>{Object.keys(Object.values(row)[2]).join(', ')}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default PlayerList;