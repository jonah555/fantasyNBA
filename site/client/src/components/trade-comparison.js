import React, { Component } from 'react';


const BOXHEADERS = ['MIN','FGM/FGA','FG%','FTM/FTA','FT%','3PM','REB','AST','STL','BLK','TO','PTS'];

class TradeComparison extends Component{
    constructor(props) {
        super(props);
        this.state = {
            focusedTeam: '',
            p1Team: [],
            p2Team: [],
            p1Stats: [],
            p2Stats: [],
            statCompare: Array(BOXHEADERS.length)
        };
    }

    addPlayer = async (e, team) => {
        // console.log(e);
        // console.log(e.target);
        let target = e.target.parentNode.parentNode;
        let playerIdx = target.getAttribute('player-idx');
        let player = this.getPlayerByIdx(playerIdx);

        await this.addStats(team, player);
            
        this.compareTrade();
    }

    async addStats(team, player) {
        if (team === 1) {
            this.setState({
                p1Team: [...this.state.p1Team, player],
                p1Stats: [...this.state.p1Stats, player['averages']]
            });
        } else if (team === 2) {
            this.setState({
                p2Team: [...this.state.p2Team, player],
                p2Stats: [...this.state.p2Stats, player['averages']]
            });
        }
    }

    compareTrade() {
        // console.log(this.state.p1Stats);
        let p1Sum = Array(BOXHEADERS.length);
        for (let i = 0; i < p1Sum.length; i++) {
            p1Sum[i] = 0.0;
        }
        for (let i = 0; i < this.state.p1Stats.length; i++) {
            for (let j = 0; j < BOXHEADERS.length; j++) {
                var p1 = this.state.p1Stats[i];
                if (j !== 0 && j !== 1 && j!== 3) {
                    p1Sum[j] += parseFloat(p1[BOXHEADERS[j]]);
                }
            }
        }

        let p2Sum = Array(BOXHEADERS.length);
        for (let i = 0; i < p2Sum.length; i++) {
            p2Sum[i] = 0.0;
        }
        for (let i = 0; i < this.state.p2Stats.length; i++) {
            for (let j = 0; j < BOXHEADERS.length; j++) {
                var p2 = this.state.p2Stats[i];
                if (j !== 0 && j !== 1 && j!== 3) {
                    p2Sum[j] += parseFloat(p2[BOXHEADERS[j]]);
                }
            }
        }

        let statCompare = Array(BOXHEADERS.length);
        for (let i = 0; i < BOXHEADERS.length; i++) {
            if (p1Sum[i] > p2Sum[i]) {
                statCompare[i] = 1;
            } else if (p1Sum[i] < p2Sum[i]) {
                statCompare[i] = 2;
            } else {
                statCompare[i] = 0;
            }
        }

        let TOIdx = BOXHEADERS.findIndex((ele) => ele === 'TO');
        if (statCompare[TOIdx] === 1) {
            statCompare[TOIdx] = 2;
        } else if (statCompare[TOIdx] === 2) {
            statCompare[TOIdx] = 1;
        }

        this.setState({
            statCompare: statCompare
        });

        return 'abc';
    }

    getPlayerByIdx(idx) {
        var pid = -1;
        let player = this.props.playerData.map((p, i) => {
            if (p['id'] === idx) {
                // console.log(p);
                pid = i;
                return p;
            }
            return null;
        });

        // console.log(player[pid]);
        // console.log(pid);

        if (pid !== -1) {
            return player[pid];
        }

        return null;
    }

    renderPlayer(row, idx, team) {
        let teamClass = 'team' + team + '-style';
        return <tr player-idx={idx} key={idx}>
            {/* <td>{row['id']}</td> */}
            <td>{row['name']}</td>
            {BOXHEADERS.map((header) => {
                return <td className={teamClass}>{row['averages'][header]}</td>;
            })}
        </tr>
    }

    resetTrade = () => {
        this.setState({
            p1Team: [],
            p2Team: [],
            p1Stats: [],
            p2Stats: [],
            statCompare: Array(BOXHEADERS.length)
        });
    }

    printTest = (row) => {
        alert(Object.values(row)[1]);
    };

    render() {
        return(
            <div id='trade-comparison-div'>
                <div className='d-flex'>
                    <div className='container'>
                        {/* <h5 className='display-6'>Player List</h5> */}
                        <div>
                            <button className='btn btn-primary' onClick={this.resetTrade}>
                                Reset Trade
                            </button>
                        </div>
                        <div className='container scroll'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        {/* <th scope='col'>#</th> */}
                                        <th scope='col'>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.playerData.map((row, idx) => {
                                        return(
                                            <tr player-idx={row['id']} key={idx}>
                                                {/* <td>{row['id']}</td> */}
                                                <td>{row['name']}</td>
                                                <td>
                                                    <button className='btn btn-success' onClick={(e) => this.addPlayer(e, 1)}>
                                                        Add to Team 1
                                                    </button>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={(e) => this.addPlayer(e, 2)}>
                                                        Add to Team 2
                                                    </button>
                                                </td>
                                            </tr>
                                            )
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id='selected-players' className='container'>
                        <div className='container d-flex justify-contents-right'>
                            <div id='team-1-div' className='container'>
                                <h5 className='display-6 team1-style'>You Acquire</h5>
                                <ul>
                                    {this.state.p1Team.map((player) => {
                                        return (<li>{player['name']}</li>)
                                    })}
                                </ul>
                            </div>
                            <div id='team-2-div' className='container'>
                                <h5 className='display-6 team2-style'>You Trade</h5>
                                <ul>
                                    {this.state.p2Team.map((player) => {
                                        return (<li>{player['name']}</li>)
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        {/* <th scope='col'>#</th> */}
                                        <th scope='col'>Name</th>
                                        {BOXHEADERS.map((header, idx) => {
                                            return <th scope='col' className={'team'+this.state.statCompare[idx]+'-style'}>{header}</th>;
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.p1Team.map((row, idx) => { return(this.renderPlayer(row, idx, 1)) })}
                                    {this.state.p2Team.map((row, idx) => { return(this.renderPlayer(row, idx, 2)) })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TradeComparison;