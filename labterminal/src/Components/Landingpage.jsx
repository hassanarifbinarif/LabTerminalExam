import React from 'react';
import axios from 'axios';
import {useEffect} from 'react'
const LandingPage = () => {
    const [matches, setMatches] = React.useState([]);
   
    function getData(){
        axios.get('/api/matches/').then(res => {
            setMatches(res.data);
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        setTimeout(() => {
        getData();
        },1500)
    },[])
    return ( 
    <div>
        <h1>Matches</h1>
        {matches && matches.map((match) => (
            <div>
                <div>City:{match.city}
             </div>
            <div>Date:{match.date}</div>
            <div>Team 1:{match.teamA}</div>
            <div>Team 2:{match.teamB}</div>
            <hr />

            </div>
            ))}
    </div> );
}
 
export default LandingPage;
