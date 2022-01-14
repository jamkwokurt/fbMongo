import React, { useState, useEffect } from 'react'
import '../App.css'
import axios from 'axios'

export const League = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios("https://api-football-standings.azharimm.site/leagues").then(
            (res) => {
                console.log(res.data.data)
                setData(res.data.data)
            }
        )
    }, []);


    return (
        <div className='league-container'>
            {data.map((data) => (
                <div key = {data.id} className='league-div'>
                     <img src = {data.logos.light} alt='league-logo'></img>
                     <h1>{data.name}</h1>
                </div>
            ))}
        </div>
    )
}

export default League