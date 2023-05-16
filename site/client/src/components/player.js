import React, { Component } from 'react';

class Player extends Component{
    constructor(props) {
        super(props);
        this.state ={
            focusedCard: false,
            data: this.props.playerData.season,
            focusedSeason: 2023,
            seasons: []
        };
    }

    componentDidMount() {
        this.renderDropdown();
    }
    
    closeWindow = () => {
        this.props.toggle();
    };

    renderDropdown() {
        for (let year in this.state.data) {
            for (let _ in this.state.data[year].team) {
                this.setState(state => ({
                    seasons: [year, ...state.seasons]
                }));
                break;
            }
        }
    }

    selectSeason = (e) => {
        // console.log(e);
        let target = e.target;
        let seasonIdx = target.getAttribute('season-idx');
        this.setState({
            focusedSeason: seasonIdx
        });
    }


    render() {
        return(
            <div className='player-card d-flex justify-content-center align-items-center container-fluid' onClick={this.closeWindow} style={{width: '100%', height: '80vh', position: 'fixed', zIndex: 1}}>    
                <div className='card container scroll' onClick={(e) => e.stopPropagation()}>
                    <div className='card-body'>
                        <div>
                            <h5 className='card-title'>{this.props.playerData.name}</h5>
                            <div className='dropdown'>
                                <button className='btn btn-primary dropdown-toggle' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                                    Season
                                </button>
                                <ul className='dropdown-menu'>
                                {this.state.seasons.map((year) => {
                                    return (
                                        <li className='dropdown-item' season-idx={year} onClick={(e) => this.selectSeason(e)}>{year}</li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                        <div className='card-data'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>game</th>
                                        <th>game id</th>
                                        {Object.keys(Object.values(this.state.data[Object.keys(this.state.data)[2]]['game log'])[0]).map((header) => {
                                            return (
                                                <th>{header}</th>
                                            )
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(this.state.data[this.state.focusedSeason]['game log']).map((row, idx) => {
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