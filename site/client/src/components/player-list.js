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
            <div id='player-list-div'>
                {this.state.focusedCard ? <Player toggle={this.toggleCard} /> : null}
                {!this.state.focusedCard ? <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Years</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.playerData.map((row, idx) => {
                            return <tr key={idx} onClick={this.toggleCard}>
                                <td>{Object.values(row)[0]}</td>
                                <td>{Object.values(row)[1]}</td>
                                <td>{Object.keys(Object.values(row)[2]).join(', ')}</td>
                            </tr>
                        })}
                    </tbody>
                </table> : null}
            </div>
        )
    }
}

export default PlayerList;