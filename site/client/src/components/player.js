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
            <div className='player-card card'>
                <div className='card-body'>
                    <h5 className='card-title'>Player</h5>
                    <button onClick={this.closeWindow}>Close</button>
                </div>
            </div>
        );
    };
}

export default Player