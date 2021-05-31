
import React from "react"
import {Link} from 'react-router-dom'
const MatchDetailCard = ({teamName,match}) =>{
    if (!match) {
        return null;
    }
    const otherTeamName = match.team1 === teamName ? match.team2:match.team1;
    const otherRoute=`/teams/${otherTeamName}`
     return (<div className="MatchDetailCard">
        <h3> Latest Matches   </h3>
       
        <h1> vs <Link to={otherRoute}>
              {otherTeamName} 
             </Link>
              </h1>
        <h2> {match.date}</h2>
        <h2> {match.venue}</h2>
        <h4>   {match.matchWinner} won by {match.resultMargin} {match.result}</h4>
    </div>)
}

export default MatchDetailCard