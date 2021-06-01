import React from "react"
import {Link} from 'react-router-dom'

const MatchSamllCard = ({match,teamName}) =>{
 
   
    if (!match) {
        return null;
    }
    const otherTeamName = match.team1 === teamName ? match.team2:match.team1;
    const otherRoute=`/teams/${otherTeamName}`

    const isWon= teamName === match.matchWinner

    return <div className=  {isWon ? 'MatchSamllCard wonCard': 'MatchSamllCard lostCard'} >
          <span>vs</span>
        <h1 className="match-name">  <Link to={otherRoute}>
              {otherTeamName} 
             </Link>
              </h1>
         <p className="match-result">   {match.matchWinner} won by {match.resultMargin} {match.result}</p>
     
    </div>
}

export default MatchSamllCard