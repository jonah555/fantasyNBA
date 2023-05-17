import React, { Component } from 'react';

import Player from './player';

const BOXHEADERS = ['MIN','FGM/FGA','FG%','FTM/FTA','FT%','3PM','REB','AST','STL','BLK','TO','PTS'];

class PlayerList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cardIsFocused: false,
            focusedSeason: 2023,
            seasons: [2023, 2022, 2021] // hard coded temporarily
        };
    }

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
    };

    printTest = (row) => {
        alert(Object.values(row)[1]);
    };


    renderPlayer(row, idx) {
        if (row['season'][this.state.focusedSeason].hasOwnProperty('averages')) {
            console.log(row['season'][this.state.focusedSeason]['averages']);
            return <tr player-idx={idx} key={idx} onClick={(e) => this.selectCard(e)}>
                <td>{row['id']}</td>
                <td>{row['name']}</td>
                {BOXHEADERS.map((header) => {
                    return <td scope='col'>{row['season'][this.state.focusedSeason]['averages'][header]}</td>;
                })}
            </tr>
        }
    }

    selectSeason = (e) => {
        let target = e.target;
        let seasonIdx = target.getAttribute('season-idx');
        this.setState({
            focusedSeason: seasonIdx
        });
    }


    render() {
        return(
            <div id='player-list-div'>
                {this.state.cardIsFocused ? <Player toggle={this.toggleCard} playerIdx={this.state.focusedCard} focusedSeason={this.state.focusedSeason} playerData={this.props.playerData[this.state.focusedCard]} /> : null}
                <div style={{filter: this.state.cardIsFocused ? 'blur(5px)' : 'none'}}>
                    <div className='dropdown'>
                        <button className='btn btn-primary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                            {this.state.focusedSeason}
                        </button>
                        <ul className='dropdown-menu'>
                        {this.state.seasons.map((year) => {
                            return (
                                <li className='dropdown-item' season-idx={year} onClick={(e) => this.selectSeason(e)}>{year}</li>
                            )
                        })}
                        </ul>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Name</th>
                                {BOXHEADERS.map((header) => {
                                    return <th scope='col'>{header}</th>;
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.playerData.map((row, idx) => { return(this.renderPlayer(row, idx)) })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PlayerList;