
import React from "react"
import {Link} from 'react-router-dom'
import "./MatchDetailCard.scss"

const MatchDetailCard = ({teamName,match}) =>{
    if (!match) {
        return null;
    }
    const otherTeamName = match.team1 === teamName ? match.team2:match.team1;
    const otherRoute=`/teams/${otherTeamName}`
    const isWon= teamName === match.matchWinner


     return (<div className=  {isWon ? 'MatchDetailCard wonCard': 'MatchDetailCard lostCard'} >
         <div>
         <h3> Latest Matches   </h3>
        <span>vs</span>
        <h1 className="match-name">  <Link to={otherRoute}>
              {otherTeamName} 
             </Link>
              </h1>
        <h2 className="match-date"> {match.date}</h2>
        <h3 className="match-venue"> {match.venue}</h3>
        <h3  className="match-result">   {match.matchWinner} won by {match.resultMargin} {match.result}</h3>
         </div>
         <div className="aditional-detail">
             <h3>First Innings</h3>
             <p>{match.team1}</p>
             <h3>Second Innings</h3>
             <p>{match.team2}</p>
             <h3>Man of the Match</h3>
             <p>{match.playerOfMatch}</p>
             <h3>Umpaiers </h3>
             <p>{match.umpire1} , {match.umpire2}</p>
         </div>
      
    </div>)
}

export default MatchDetailCard