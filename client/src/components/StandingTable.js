import React, { Component } from 'react';

class StandingTable extends Component {

    render() {
        let symbol = null;
        if(this.props.ga > 0) { symbol = '+'; }
        
        return(
            <tr>
                <td>{this.props.position}</td>
                <td className="badge-td"><div className="badge">
                    <img src={this.props.badge} alt={this.props.team} /></div></td>
                <td>{this.props.team}</td>
                <td className='s-number'>{this.props.played}</td>
                <td className='s-number'>{this.props.won}</td>
                <td className='s-number'>{this.props.draw}</td>
                <td className='s-number'>{this.props.lost}</td>
                <td className='s-number'>{symbol}{this.props.ga}</td>
                <td className='s-number'>{this.props.points}</td>
            </tr>
        )
    }
};

export default StandingTable;