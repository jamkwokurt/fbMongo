import React, { useState, useEffect } from 'react';
import axios from 'axios'
import StandingTable from './StandingTable';

export const Standing = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedLeague, setSelectedLeague] = useState('eng.1')
    const [selectedYear, setSelectedYear] = useState('2021')

    useEffect(() => {
        setLoading(true);
        axios(`https://api-football-standings.azharimm.site/leagues/${selectedLeague}/standings?season=${selectedYear}`)
        .then(
            (res) => {
                console.log(res.data.data.standings);
                setData(res.data.data.standings);
                setLoading(false)
        }).catch(err => console.log(err))

    }, [selectedLeague,selectedYear]);

    let table = 
          <thead>
            <tr>
              <td colSpan="9">
              </td>
            </tr>
            <tr>
              <th className="position">#</th>
              <th className="team" colSpan="2">Team</th>
              <th className="played">Played</th>
              <th className="won">Won</th>
              <th className="draw">Draw</th>
              <th className="lost">Lost</th>
              <th className="ga">GA</th>
              <th className="points">Points</th>
            </tr>
          </thead>;
    
    return (
        <div className='standing-container'>
            <div className='select-container'>
                <select name='select-league' id='select-league' defaultValue={selectedLeague} 
                    onChange={(e) => setSelectedLeague(e.target.value)}>
                    <option value='arg.1'>Argentine Liga Profesional de Fútbol</option>
                    <option value='aus.1'>Australian A-League</option>
                    <option value='bra.1'>Brazilian Serie A</option>
                    <option value='chn.1'>Chinese Super League</option>
                    <option value='ned.1'>Dutch Eredivisie</option>
                    <option value='eng.1'>English Premier League</option>
                    <option value='fra.1'>French Ligue 1</option>
                    <option value='ger.1'>German Bundesliga</option>
                    <option value='idn.1'>Indonesian Liga 1</option>
                    <option value='ita.1'>Italian Serie A</option>
                    <option value='jpn.1'>Japanese J League</option>
                    <option value='mys.1'>Malaysian Super League</option>
                    <option value='mex.1'>Mexican Liga BBVA MX</option>
                    <option value='por.1'>Portuguese Liga</option>
                    <option value='rus.1'>Russian Premier League</option>
                    <option value='sgp.1'>Singaporean Premier League</option>
                    <option value='esp.1'>Spanish Primera División</option>
                    <option value='tha.1'>Thai Premier League</option>
                    <option value='tur.1'>Turkish Super Lig</option>
                    <option value='uga.1'>Ugandan Super League</option>
                </select>
                <select name='select-year' id='select-year' defaultValue={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}>
                    <option value='2011'>2011-2012</option>
                    <option value='2012'>2012-2013</option>
                    <option value='2013'>2013-2014</option>
                    <option value='2014'>2014-2015</option>
                    <option value='2015'>2015-2016</option>
                    <option value='2016'>2016-2017</option>
                    <option value='2017'>2017-2018</option>
                    <option value='2018'>2018-2019</option>
                    <option value='2019'>2019-2020</option>
                    <option value='2020'>2020-2021</option>
                    <option value='2021'>2021-2022</option>
                </select>
            </div>
            { loading ? (<p>loading...</p>) : 
            (<div className='standing-info-div'>
                <div className="table-responsive mt-5">
                  <table className="table">
                    {table}
                        {data.map((data, index) => (
                            <tbody key={data.team.id}>
                                <StandingTable
                                    
                                    position={data.stats[8].value}
                                    badge={data.team.logos[0].href}
                                    team={data.team.shortDisplayName}
                                    played={data.stats[3].value}
                                    won={data.stats[0].value}
                                    draw={data.stats[2].value}
                                    lost={data.stats[1].value}
                                    ga={data.stats[5].value}
                                    points={data.stats[6].value}
                                >
                                </StandingTable>
                            </tbody>
                            )
                        )} 
                  </table>
                </div>
            </div>)}
        </div>
    )
}

export default Standing