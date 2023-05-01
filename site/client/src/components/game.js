import React, { Component } from 'react';

class Game extends Component{
    state = {
        focusedCard: false
    };
    
    closeWindow = () => {
        this.props.toggle();
    };

    render() {
        return(
            <div className='game-card d-flex justify-content-center align-items-center container' onClick={this.closeWindow} style={{width: '100%', height: '80vh', position: 'fixed', zIndex: 1}}>    
                <div className='card' onClick={(e) => e.stopPropagation()}>
                    <div className='card-body'>
                        <h5 className='card-title'>Game</h5>
                        <button onClick={this.closeWindow}>Close</button>
                    </div>
                </div>
            </div>
        );
    };
}

export default Game